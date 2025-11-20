const express = require('express');
const router = express.Router();

// CAMINHO CORRETO:
const { HomeText } = require('../models');

const seedHome = async () => {
  const count = await HomeText.count();
  if (count === 0) {
    await HomeText.create({
      texto: "Me chamo Gabriel Kodato, sou estudante de programação, aqui estão meus projetos e aprendizados."
    });
  }
};

router.get('/', async (req, res) => {
  try {
    await seedHome();
    const texto = await HomeText.findOne();
    res.render('pages/home', { title: "Página Inicial", texto_home: { Texto: texto.texto } });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

router.post('/', async (req, res) => {
  try {
    const { Texto } = req.body;
    if (!Texto) return res.status(400).json({ message: 'Texto não enviado!' });

    const texto = await HomeText.findOne();
    texto.texto = Texto;
    await texto.save();

    res.json({ message: "Texto atualizado com sucesso!", textoatual: texto.texto });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar' });
  }
});

router.post('/reset-home', async (req, res) => {
  try {
    const texto = await HomeText.findOne();
    texto.texto = "Me chamo Gabriel Kodato, sou estudante de programação, aqui estão meus projetos e aprendizados.";
    await texto.save();

    res.json({ message: "Texto resetado para o valor original", textoAtual: texto.texto });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao resetar' });
  }
});

router.put('/', async (req, res) => {
  try {
    const { Texto } = req.body;
    if (!Texto) return res.status(400).json({ message: 'Texto não fornecido.' });

    const texto = await HomeText.findOne();
    texto.texto = Texto;
    await texto.save();

    res.json({ message: 'Texto atualizado via PUT com sucesso!', textoAtual: texto.texto });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro' });
  }
});

module.exports = router;

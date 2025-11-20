const express = require('express');
const router = express.Router();
const { Sobre } = require('../models');

const seedSobre = async () => {
  const count = await Sobre.count();
  if (count === 0) {
    await Sobre.create({
      nome: "Gabriel Kodato Faria",
      curso: "Desenvolvimento de Software Multiplataforma",
      instituicao: "FATEC São José dos Campos – Jessen Vidal",
      anoIngresso: "2025/1",
      idade: 20,
      estagio: "VallTech",
      armazem: "Armazem da Pizza"
    });
  }
};

router.get('/', async (req, res) => {
  try {
    await seedSobre();
    const dadossobremim = await Sobre.findOne();
    res.render('pages/sobre', { title: "Página Sobre Mim", dadossobremim });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

router.post('/', async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ message: 'Nome não fornecido.' });
    const sobre = await Sobre.findOne();
    sobre.nome = nome;
    await sobre.save();
    res.json({ message: 'Texto que deu bom', nomeatual: sobre.nome });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar' });
  }
});

router.post('/reset-sobre', async (req, res) => {
  try {
    const sobre = await Sobre.findOne();
    if (!sobre) return res.status(404).json({ message: 'Registro sobre não encontrado.' });

    sobre.nome = "Gabriel Kodato Faria";
    sobre.curso = "Desenvolvimento de Software Multiplataforma";
    sobre.instituicao = "FATEC São José dos Campos – Jessen Vidal";
    sobre.anoIngresso = "2025/1";
    sobre.idade = 20;
    sobre.estagio = "VallTech";
    sobre.armazem = "Armazem da Pizza";
    await sobre.save();

    res.json({ message: "Dados resetados para os valores originais", dadosAtualizados: sobre });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao resetar' });
  }
});

router.post('/estagio', async (req, res) => {
  try {
    const { novo_estagio } = req.body;
    if (!novo_estagio) return res.status(400).json({ msg: "Campo 'novo_estagio' é obrigatório" });
    const sobre = await Sobre.findOne();
    sobre.estagio = novo_estagio;
    await sobre.save();
    res.json({ msg: "Novo estágio cadastrado", novo_estagio: sobre.estagio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar estagio' });
  }
});

module.exports = router;

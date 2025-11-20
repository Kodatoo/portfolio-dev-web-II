const express = require('express');
const router = express.Router();
const { Disciplina } = require('../models');


const seedDisciplinas = async () => {
  const count = await Disciplina.count();
  if (count === 0) {
    const emCurso = [
      "Algoritmos Lógica e programação",
      "Engenharia de Software II",
      "Banco de dados relacional",
      "Estrutura de Dados",
      "Matemática computacional",
      "Técnicas de programação",
      "Desenvolvimento Web II"
    ];
    const concluidas = [
      "Modelagem de banco de dados",
      "Engenharia de Software",
      "Design Digital",
      "Desenvolvimento Web II",
      "Sistemas operacionais e redes"
    ];
    await Promise.all([
      ...emCurso.map(n => Disciplina.create({ nome: n, tipo: 'curso' })),
      ...concluidas.map(n => Disciplina.create({ nome: n, tipo: 'concluida' }))
    ]);
  }
};

router.get('/', async (req, res) => {
  try {
    await seedDisciplinas();
    const disciplinas_em_curso = await Disciplina.findAll({ where: { tipo: 'curso' } });
    const disciplinas_concluidas = await Disciplina.findAll({ where: { tipo: 'concluida' } });

    res.render('pages/disciplinas', {
      title: "Disciplinas",
      disciplinas_em_curso,
      disciplinas_concluidas
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/api', async (req, res) => {
  const curso = await Disciplina.findAll({ where: { tipo: 'curso' } });
  const concluidas = await Disciplina.findAll({ where: { tipo: 'concluida' } });
  res.json({ curso, concluidas });
});

router.post('/api', async (req, res) => {
  try {
    const { novaDisciplina, tipo } = req.body;
    if (!novaDisciplina || !['curso','concluida'].includes(tipo)) {
      return res.status(400).json({ erro: "Informe 'novaDisciplina' e 'tipo' ('curso' ou 'concluida')." });
    }
    const disciplina = await Disciplina.create({ nome: novaDisciplina, tipo });
    res.json({ msg: "Disciplina adicionada", disciplina });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao adicionar disciplina" });
  }
});

router.delete('/api', async (req, res) => {
  try {
    const { id } = req.body; // agora espera id (recomendado)
    if (!id) return res.status(400).json({ erro: "Informe 'id' no corpo da requisição." });

    const deleted = await Disciplina.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ erro: "Disciplina não encontrada." });

    res.json({ msg: "Disciplina removida com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao remover disciplina" });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

let disciplinas_em_curso = [
  "Algoritmos Lógica e programação",
  "Engenharia de Software II",
  "Banco de dados relacional",
  "Estrutura de Dados",
  "Matemática computacional",
  "Técnicas de programação",
  "Desenvolvimento Web II"
];

let disciplinas_concluidas = [
  "Modelagem de banco de dados",
  "Engenharia de Software",
  "Design Digital",
  "Desenvolvimento Web II",
  "Sistemas operacionais e redes"
];

router.get('/', (req, res) => {
  res.render('pages/disciplinas', {
    title: "Disciplinas",
    disciplinas_em_curso,
    disciplinas_concluidas
  });
});

router.get('/api', (req, res) => {
  res.json({
    curso: disciplinas_em_curso,
    concluidas: disciplinas_concluidas
  });
});

router.post('/api', (req, res) => {
  const { novaDisciplina, tipo } = req.body;
  if (tipo === "curso") {
    disciplinas_em_curso.push(novaDisciplina);
  } else {
    disciplinas_concluidas.push(novaDisciplina);
  }
  res.json({
    msg: "Disciplina adicionada",
    curso: disciplinas_em_curso,
    concluidas: disciplinas_concluidas
  });
});

router.delete('/api', (req, res) => {
  const { tipo, index } = req.body;
  if (tipo === "curso") {
    disciplinas_em_curso.splice(index, 1);
  } else {
    disciplinas_concluidas.splice(index, 1);
  }
  res.json({
    msg: "Disciplina removida",
    curso: disciplinas_em_curso,
    concluidas: disciplinas_concluidas
  });
});

module.exports = router;

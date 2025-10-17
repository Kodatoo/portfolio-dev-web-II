const express = require('express');
const router = express.Router();

// === Dados ===
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

let numeroProjetos = 2;

let tecnologiasMaisUsadas = ["Python", "JavaScript", "TypeScript"];

// === GET - Renderiza dashboard EJS ===
router.get('/', (req, res) => {
  const dashboardData = {
    title: "Dashboard",
    totalDisciplinas: disciplinas_em_curso.length + disciplinas_concluidas.length,
    numeroProjetos,
    tecnologiasMaisUsadas
  };
  res.render('pages/dashboard', dashboardData);
});

// === GET API - Retorna dados em JSON ===
router.get('/api', (req, res) => {
  res.json({
    disciplinas_em_curso,
    disciplinas_concluidas,
    numeroProjetos,
    tecnologiasMaisUsadas
  });
});

// === POST - Adicionar disciplina ===
router.post('/api', (req, res) => {
  const { novaDisciplina, tipo } = req.body;

  if (!novaDisciplina || !tipo) {
    return res.status(400).json({ erro: "Informe 'novaDisciplina' e 'tipo' ('curso' ou 'concluida')." });
  }

  if (tipo === "curso") {
    disciplinas_em_curso.push(novaDisciplina);
  } else if (tipo === "concluida") {
    disciplinas_concluidas.push(novaDisciplina);
  } else {
    return res.status(400).json({ erro: "Tipo inválido. Use 'curso' ou 'concluida'." });
  }

  res.json({ msg: "Disciplina adicionada com sucesso!", disciplinas_em_curso, disciplinas_concluidas });
});

// === PUT - Atualizar disciplina ===
router.put('/api', (req, res) => {
  const { index, novoNome, tipo } = req.body;

  if (tipo === "curso" && disciplinas_em_curso[index] !== undefined) {
    disciplinas_em_curso[index] = novoNome;
  } else if (tipo === "concluida" && disciplinas_concluidas[index] !== undefined) {
    disciplinas_concluidas[index] = novoNome;
  } else {
    return res.status(404).json({ erro: "Disciplina não encontrada." });
  }

  res.json({ msg: "Disciplina atualizada com sucesso!", disciplinas_em_curso, disciplinas_concluidas });
});

// === DELETE - Remover disciplina ===
router.delete('/api', (req, res) => {
  const { tipo, index } = req.body;

  if (tipo === "curso" && disciplinas_em_curso[index] !== undefined) {
    disciplinas_em_curso.splice(index, 1);
  } else if (tipo === "concluida" && disciplinas_concluidas[index] !== undefined) {
    disciplinas_concluidas.splice(index, 1);
  } else {
    return res.status(404).json({ erro: "Disciplina não encontrada." });
  }

  res.json({ msg: "Disciplina removida com sucesso!", disciplinas_em_curso, disciplinas_concluidas });
});

module.exports = router;

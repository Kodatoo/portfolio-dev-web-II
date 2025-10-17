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

// === Rota ===
router.get('/', (req, res) => {
  const dashboardData = {
    title: "Dashboard",
    totalDisciplinas: disciplinas_em_curso.length + disciplinas_concluidas.length,
    numeroProjetos,
    tecnologiasMaisUsadas
  };

  res.render('pages/dashboard', dashboardData);
});

module.exports = router;

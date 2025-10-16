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
]


let disciplinas_concluidas = [
  "Modelagem de banco de dados",
  "Engenharia de Software",
  "Design Digital",
  "Desenvolvimento Web II",
  "Sistemas operacionais e redes"
]

router.get('/', (req, res) => {
  

  let paginadisciplina = {
    title: "Disiciplinas",
    disciplinas_em_curso,
    disciplinas_concluidas
  }

  res.render('pages/disciplinas', paginadisciplina)
});

module.exports = router;
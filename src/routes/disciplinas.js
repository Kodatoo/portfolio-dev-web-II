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

router.post('/', (req, res) => {
  const { novaDisciplina, tipo } = req.body;
  if (tipo === "curso") {
    disciplinas_em_curso.push(novaDisciplina);
  } else {
    disciplinas_concluidas.push(novaDisciplina);
  }
  res.redirect('/disciplinas');
});


router.delete('/:tipo/:index', (req, res) => {
  const { tipo, index } = req.params;

  if (tipo === "curso") disciplinas_em_curso.splice(index, 1);
  else disciplinas_concluidas.splice(index, 1);

  res.sendStatus(200);
});

module.exports = router;
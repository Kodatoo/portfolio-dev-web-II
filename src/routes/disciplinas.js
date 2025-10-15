const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  

  let paginadisciplina = {
    title: "Disiciplinas"
  }

  res.render('pages/disciplinas', paginadisciplina)
});

module.exports = router;
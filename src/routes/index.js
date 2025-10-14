const express = require('express');
const router = express.Router();

// Página inicial
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Página Inicial' });
});

module.exports = router;

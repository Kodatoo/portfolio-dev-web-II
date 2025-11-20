const express = require('express');
const router = express.Router();
const { Contato } = require('../models');

const seedContato = async () => {
  const count = await Contato.count();
  if (count === 0) {
    await Contato.create({
      linkedin: "https://www.linkedin.com/in/gabriel-kodato-b745742b8/",
      github: "https://github.com/Kodatoo",
      email: "gkodatofaria@gmail.com"
    });
  }
};

router.get('/', async (req, res) => {
  try {
    await seedContato();
    const redes = await Contato.findOne();
    res.render('pages/contato', { title: "Contatos", redes });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

let redes = {
  linkedin: "https://www.linkedin.com/in/gabriel-kodato-b745742b8/",
  github: "https://github.com/Kodatoo",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=gkodatofaria@gmail.com"
}


router.get('/', (req, res) => {
  const contatospagina = {
    title: "Contatos",
    redes
  }

  res.render('pages/contato', contatospagina);
});

module.exports = router;

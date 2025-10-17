const express = require('express');
const router = express.Router();


const texto_original = 
   "Me chamo Gabriel Kodato, sou estudante de programação, aqui estão meus projetos e aprendizados."


let texto_home = {
   Texto: texto_original
}


router.post('/', (req, res) =>{
  const novoTexto = req.body.Texto

  if(novoTexto){
    texto_home.Texto = novoTexto
    return res.json({
      message: 'Texto atualizado com sucesso!',
      textoatual: texto_home.Texto
    })
  }

})

router.post('/reset-home', (req, res) => {
  texto_home.Texto = texto_original
  res.json({ message: "Texto resetado para o valor original", textoAtual: texto_home.Texto })
});

router.put('/', (req, res) => {
  const novoTexto = req.body.Texto

  if (novoTexto) {
    texto_home.Texto = novoTexto
    return res.json({
      message: 'Texto atualizado via PUT com sucesso!',
      textoAtual: texto_home.Texto
    });
  } else {
    return res.status(400).json({ message: 'Texto não fornecido.' })
  }
});

router.get('/', (req, res) => {

  let texto_intro = {
    title: "Página Inicial",
    texto_home
  }

  res.render('pages/home', texto_intro);
});

module.exports = router;

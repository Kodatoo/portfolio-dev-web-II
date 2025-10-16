const express = require('express');
const router = express.Router();

const dadossobremim = {
        nome: "Gabriel Kodato Faria",
        curso: "Desenvolvimento de Software Multiplataforma",
        instituicao: "FATEC São José dos Campos – Jessen Vidal",
        anoIngresso: "2025/1",
        idade: 20,
        estagio: "VallTech",
        armazem: "Armazem da Pizza"
    }

router.get('/', (req, res) => {



    const dadosDaPagina = {
        title: "Página Sobre Mim", 
        dadossobremim
    };
    

    res.render('pages/sobre', dadosDaPagina); 
});

module.exports = router;
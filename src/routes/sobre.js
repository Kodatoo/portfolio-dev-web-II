const express = require('express');
const router = express.Router();

// A rota GET '/' aqui se refere ao caminho onde este router é usado (ex: /sobre)
router.get('/', (req, res) => {

    const dadossobremim = {
        nome: "Gabriel Kodato Faria",
        curso: "Desenvolvimento de Software Multiplataforma",
        instituicao: "FATEC São José dos Campos – Jessen Vidal",
        anoIngresso: "2025/1",
        idade: 20,
        estagio: "VallTech",
        armazem: "Armazem da Pizza"
    }
    
    // 1. DEFINA O OBJETO DE DADOS AQUI, INCLUINDO A VARIÁVEL 'title'
    const dadosDaPagina = {
        title: "Página Sobre Mim", 
        dadossobremim
    };
    
    // 2. Renderiza o template 'views/pages/sobre.ejs' e passa os dados
    res.render('pages/sobre', dadosDaPagina); 
});

module.exports = router;
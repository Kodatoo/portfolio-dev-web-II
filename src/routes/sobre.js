const express = require('express');
const router = express.Router();

// A rota GET '/' aqui se refere ao caminho onde este router é usado (ex: /sobre)
router.get('/', (req, res) => {
    
    // 1. DEFINA O OBJETO DE DADOS AQUI, INCLUINDO A VARIÁVEL 'title'
    const dadosDaPagina = {
        title: "Página Sobre Mim", // <--- Esta linha é crucial!
        // Adicione outros dados que sua página precise aqui
        // exemplo: usuario: "Nome do Usuário",
    };
    
    // 2. Renderiza o template 'views/pages/sobre.ejs' e passa os dados
    res.render('pages/sobre', dadosDaPagina); 
});

module.exports = router;
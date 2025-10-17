const express = require('express');
const router = express.Router();

const dadosOriginais = {
    nome: "Gabriel Kodato Faria",
    curso: "Desenvolvimento de Software Multiplataforma",
    instituicao: "FATEC São José dos Campos – Jessen Vidal",
    anoIngresso: "2025/1",
    idade: 20,
    estagio: "VallTech",
    armazem: "Armazem da Pizza"
};


let dadossobremim = { ...dadosOriginais };


router.post('/', (req, res)=>{
    novo_nome = req.body.nome

    if(novo_nome){
        dadossobremim.nome = novo_nome
        return res.json({
            message: 'Texto que deu bom',
            nomeatual: dadossobremim.nome
        })
    }
})



router.get('/', (req, res) => {



    const dadosDaPagina = {
        title: "Página Sobre Mim", 
        dadossobremim
    };
    

    res.render('pages/sobre', dadosDaPagina); 
});

router.post('/reset-sobre', (req, res) => {
    dadossobremim = { ...dadosOriginais }; 
    res.json({
        message: "Dados resetados para os valores originais",
        dadosAtualizados: dadossobremim
    });
});

module.exports = router;
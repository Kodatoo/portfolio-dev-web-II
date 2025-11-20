const express = require('express');
const router = express.Router();
const { Projeto } = require('../models');

const seedProjetos = async () => {
  const count = await Projeto.count();
  if (count === 0) {
    await Projeto.bulkCreate([
      {
        titulo: "API CROWS",
        descricao: "No projeto Crows, o objetivo é criar uma plataforma web que oferece uma análise de desempenho dos municípios do estado de São Paulo sobre os dados do comércio exterior...",
        github: "https://github.com/arthur-oliver/api-crows/tree/main",
        gif: "/img/crows.gif",
        introducao: "Criei gráficos de top 10 valor FOB por municípios ..."
      },
      {
        titulo: "API KINGFISHER",
        descricao: "Desenvolver uma plataforma integrada que centraliza e padroniza os processos administrativos...",
        github: "https://github.com/gustasvos/kingfisher-fatec-api",
        videoUrl: "https://www.youtube.com/embed/kRzsDg2WI8k",
        introducao: "Atuação no backend, criando endpoint de login..."
      }
    ]);
  }
};

router.get('/', async (req, res) => {
  try {
    await seedProjetos();
    const projetos = await Projeto.findAll();
    res.render('pages/projetos', { title: "Projetos", projetos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/api', async (req, res) => {
  const projetos = await Projeto.findAll();
  res.json(projetos);
});

router.post('/api', async (req, res) => {
  try {
    const { titulo, descricao, github, gif, videoUrl, introducao } = req.body;
    if (!titulo || !descricao || !introducao) {
      return res.status(400).json({ erro: "Informe pelo menos 'titulo', 'descricao' e 'introducao'." });
    }
    const novo = await Projeto.create({ titulo, descricao, github, gif, videoUrl, introducao });
    res.json({ msg: "Projeto adicionado com sucesso!", projeto: novo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao criar projeto" });
  }
});

router.put('/api/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const projeto = await Projeto.findByPk(id);
    if (!projeto) return res.status(404).json({ erro: "Projeto não encontrado." });

    const { titulo, descricao, github, gif, videoUrl, introducao } = req.body;
    if (titulo) projeto.titulo = titulo;
    if (descricao) projeto.descricao = descricao;
    if (github) projeto.github = github;
    if (gif) projeto.gif = gif;
    if (videoUrl) projeto.videoUrl = videoUrl;
    if (introducao) projeto.introducao = introducao;

    await projeto.save();
    res.json({ msg: "Projeto atualizado com sucesso!", projeto });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao atualizar projeto" });
  }
});

module.exports = router;

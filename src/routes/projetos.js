const express = require('express');
const router = express.Router();

const projetos = [
  {
    titulo: "API CROWS",
    descricao: "No projeto Crows, o objetivo é criar uma plataforma web que oferece uma análise de desempenho dos municípios do estado de São Paulo sobre os dados do comércio exterior, utilizando dados abertos do Ministério do Desenvolvimento, Indústria, Comércio e Serviços. A ferramenta permitirá que tomadores de decisão identifiquem municípios em ascensão, estagnação ou declínio no mercado internacional.",
    github: "https://github.com/arthur-oliver/api-crows/tree/main",
    gif: "/img/crows.gif", // Coloque esse gif na pasta public/images
    introducao: "Criei gráficos de top 10 valor FOB por municípios no ramo de importação e exportação usando Google Colab, utilizando a biblioteca Pandas de Python. Também atuei no desenvolvimento front-end, construindo a página de gráficos do site com filtros interativos e elementos de visualização de dados."
  },
  {
    titulo: "API KINGFISHER",
    descricao: "Desenvolver uma plataforma integrada que centraliza e padroniza os processos administrativos, comerciais e operacionais da empresa Newe. A solução facilita a visualização de informações essenciais, notificações e relatórios em tempo real, promovendo maior eficiência, controle e suporte à tomada de decisão. Trata-se de um sistema CRM completo para gerenciamento dos setores da empresa, otimizando o fluxo de trabalho e aprimorando a comunicação interna",
    github: "https://github.com/gustasvos/kingfisher-fatec-api",
    videoUrl: "https://www.youtube.com/embed/kRzsDg2WI8k",
    introducao: "Atuação no backend, criando endpoint de login utilizando TypeScript, TypeORM e validação via token com JWT."
  }
];

router.get('/', (req, res) => {
  res.render('pages/projetos', { title: "Projetos", projetos });
});

router.get('/api', (req, res) => {
  res.json(projetos);
});

router.post('/api', (req, res) => {
  const { titulo, descricao, github, gif, videoUrl, introducao } = req.body;

  if (!titulo || !descricao || !introducao) {
    return res.status(400).json({ erro: "Informe pelo menos 'titulo', 'descricao' e 'introducao'." });
  }

  const novoProjeto = { titulo, descricao, github, gif, videoUrl, introducao };
  projetos.push(novoProjeto);

  res.json({ msg: "Projeto adicionado com sucesso!", projetos });
});

router.put('/api/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { titulo, descricao, github, gif, videoUrl, introducao } = req.body;

  if (!projetos[index]) {
    return res.status(404).json({ erro: "Projeto não encontrado." });
  }


  if (titulo) projetos[index].titulo = titulo;
  if (descricao) projetos[index].descricao = descricao;
  if (github) projetos[index].github = github;
  if (gif) projetos[index].gif = gif;
  if (videoUrl) projetos[index].videoUrl = videoUrl;
  if (introducao) projetos[index].introducao = introducao;

  res.json({ msg: "Projeto atualizado com sucesso!", projetos });
});


module.exports = router;

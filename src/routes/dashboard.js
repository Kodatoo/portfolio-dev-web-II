const express = require('express');
const router = express.Router();
const { DashboardInfo, Tecnologia } = require('../models');

const seedDashboard = async () => {
  const infoCount = await DashboardInfo.count();
  const techCount = await Tecnologia.count();
  if (infoCount === 0) {
    await DashboardInfo.create({ numeroProjetos: 2 });
  }
  if (techCount === 0) {
    await Tecnologia.bulkCreate([
      { nome: 'Python' },
      { nome: 'JavaScript' },
      { nome: 'TypeScript' }
    ]);
  }
};

router.get('/', async (req, res) => {
  try {
    await seedDashboard();
    const info = await DashboardInfo.findOne();
    const tecnologiasMaisUsadas = await Tecnologia.findAll();
    const totalDisciplinas = null; // pode calcular via Disciplina se quiser (precisa importar model)
    res.render('pages/dashboard', {
      title: "Dashboard",
      totalDisciplinas,
      numeroProjetos: info.numeroProjetos,
      tecnologiasMaisUsadas
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro no servidor');
  }
});

router.get('/api', async (req, res) => {
  const info = await DashboardInfo.findOne();
  const tecnologias = await Tecnologia.findAll();
  res.json({
    numeroProjetos: info ? info.numeroProjetos : 0,
    tecnologias: tecnologias.map(t => t.nome)
  });
});

router.post('/api', async (req, res) => {
  try {
    const { novaDisciplina, tipo } = req.body;
    return res.status(400).json({ msg: "Use endpoints específicos: /disciplinas ou /dashboard/tecnologia" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro' });
  }
});

// adicionar tecnologia (análogo ao antigo /apiti)
router.post('/apiti', async (req, res) => {
  try {
    const { nova_tecnologia } = req.body;
    if (!nova_tecnologia) return res.status(400).json({ msg: "Campo 'nova_tecnologia' é obrigatório" });
    const nova = await Tecnologia.create({ nome: nova_tecnologia });
    res.json({ msg: "Tecnologia adicionada com sucesso!", nova });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar tecnologia' });
  }
});

module.exports = router;

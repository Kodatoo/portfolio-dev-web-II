const express = require('express');
const path = require('path');
const app = express();

// === Banco de Dados (Sequelize) ===
const models = require('./src/models');
const sequelize = models.sequelize;  

// Testa conexão
sequelize.authenticate()
  .then(() => console.log("📡 Conectado ao MySQL com sucesso!"))
  .catch(err => console.log("❌ Erro ao conectar no MySQL:", err));

// Sincroniza tabelas
sequelize.sync({ alter: true })
  .then(() => console.log("📦 Tabelas sincronizadas com o banco!"))
  .catch(err => console.log("❌ Erro ao sincronizar tabelas:", err));


// === Configuração do EJS ===
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// === Arquivos estáticos ===
app.use(express.static(path.join(__dirname, 'src', 'public')));

// === Rotas ===
const indexRoutes = require('./src/routes/index');
const sobreRoutes = require('./src/routes/sobre');
const disciplinasRoutes = require('./src/routes/disciplinas');
const projetosRoutes = require('./src/routes/projetos');
const contatoRoutes = require('./src/routes/contato');
const dashboardRoutes = require('./src/routes/dashboard');

// === Usar rotas ===
app.use('/', indexRoutes);
app.use('/sobre', sobreRoutes);
app.use('/disciplinas', disciplinasRoutes);
app.use('/projetos', projetosRoutes);
app.use('/contato', contatoRoutes);
app.use('/dashboard', dashboardRoutes);

// === Servidor ===
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
});

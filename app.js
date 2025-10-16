const express = require('express');
const path = require('path');
const app = express();

// === Configuração do EJS ===
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// === Middleware para arquivos estáticos (CSS, imagens, JS front-end) ===
app.use(express.static(path.join(__dirname, 'src', 'public')));

// === Rotas ===
const indexRoutes = require('./src/routes/index');
const sobreRoutes = require('./src/routes/sobre');
const disciplinasRoutes = require('./src/routes/disciplinas');
const projetosRoutes = require('./src/routes/projetos');
const contatoRoutes = require('./src/routes/contato');
const dashboardRoutes = require('./src/routes/dashboard');

// === Usar as rotas ===
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

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./src/routes/index'); // importa as rotas

// === Configurações do EJS ===
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// === Arquivos estáticos (CSS, imagens, JS front-end) ===
app.use(express.static(path.join(__dirname, 'src', 'public')));

// === Usar as rotas ===
app.use('/', routes);

// === Servidor ===
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, 'src', 'public'))); // libera acesso para pegar o CSS

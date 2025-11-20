const { Sequelize, DataTypes } = require("sequelize");

// CONFIGURAÇÃO DO BANCO
const sequelize = new Sequelize(
  "portfolio_db",
  "root",
  "12345678",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

const Home = require("./Home")(sequelize, DataTypes);
const Disciplinas = require("./Disciplinas")(sequelize, DataTypes);
const Contato = require("./Contato")(sequelize, DataTypes);
const Dashboard = require("./Dashboard")(sequelize, DataTypes);
const Projeto = require("./Projeto")(sequelize, DataTypes);
const Sobre = require("./Sobre")(sequelize, DataTypes);


sequelize.sync().then(() => {
  console.log("📦 Tabelas sincronizadas com sucesso!");
});

// EXPORTA
module.exports = {
  sequelize,
  Home,
  Disciplinas,
  Contato,
  Dashboard,
  Projeto,
  Sobre
};

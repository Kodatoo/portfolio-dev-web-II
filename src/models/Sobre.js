module.exports = (sequelize, DataTypes) => {
  const Sobre = sequelize.define("Sobre", {
    nome: DataTypes.STRING,
    curso: DataTypes.STRING,
    instituicao: DataTypes.STRING,
    anoIngresso: DataTypes.STRING,
    idade: DataTypes.INTEGER,

    estagios: {
      type: DataTypes.JSON, 
      defaultValue: []
    },

    armazem: DataTypes.STRING
  }, {
    tableName: "sobre"
  });

  return Sobre;
};

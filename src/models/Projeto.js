module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define("Projeto", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Projeto;
};

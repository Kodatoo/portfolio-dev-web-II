module.exports = (sequelize, DataTypes) => {
  const Contato = sequelize.define("Contato", {
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Contato;
};

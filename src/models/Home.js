module.exports = (sequelize, DataTypes) => {
  const HomeText = sequelize.define("HomeText", {
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return HomeText;
};

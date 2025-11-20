module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define("Disciplina", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("curso", "concluida"),
      allowNull: false
    }
  });

  return Disciplina;
};

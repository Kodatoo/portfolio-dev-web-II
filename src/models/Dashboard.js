module.exports = (sequelize, DataTypes) => {

  const DashboardInfo = sequelize.define("DashboardInfo", {
    numeroProjetos: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: "dashboard_info"
  });


  const Tecnologia = sequelize.define("Tecnologia", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: "tecnologias"
  });


  return { DashboardInfo, Tecnologia };
};

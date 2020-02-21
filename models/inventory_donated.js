module.exports = function(sequelize, DataTypes) {
    var Inventory_donated = sequelize.define("Inventory_donated", {
    });
    Inventory_donated.associate = function(models) {
        Inventory_donated.belongsTo(models.Company_profile, {
          foreignKey: {
            allowNull: false
          }
        });
        Inventory_donated.belongsTo(models.Inventory, {
          foreignKey: {
            allowNull: false
          }
        });
   
      };
    return Inventory_donated;
  };
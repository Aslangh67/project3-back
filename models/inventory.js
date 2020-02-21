module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
      title:{ type: DataTypes.STRING, allowNull: false},
      quantity:{ type: DataTypes.INTEGER, allowNull: false},
      unit:{ type: DataTypes.STRING, allowNull: false},
      value_unit:{ type: DataTypes.DECIMAL(10,2), allowNull: false},
      exp_date:{ type: DataTypes.DATE}
    });
    Inventory.associate = function(models) {
        Inventory.belongsTo(models.Location, {
          foreignKey: {
            allowNull: false
          }
        });
        Inventory.belongsTo(models.Company_profile, {
          foreignKey: {
            name: "charity_id"
            
          }
        });
        Inventory.hasOne(models.Inventory_donated,{
          onDelete: "cascade"
        });
      };
    return Inventory;
  };
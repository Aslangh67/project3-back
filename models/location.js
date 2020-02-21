module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
      address:{ type: DataTypes.STRING, allowNull: false},
      city:{ type: DataTypes.STRING, allowNull: false},
      state:{ type: DataTypes.STRING, allowNull: false},
      zip:{ type: DataTypes.INTEGER, allowNull: false},
      latitude: { type: DataTypes.INTEGER},
      longitude: { type: DataTypes.INTEGER},
    });
    Location.associate = function(models) {
        Location.belongsTo(models.Company_profile, {
          foreignKey: {
            allowNull: false
          }
        });
        Location.hasMany(models.Inventory,{
          onDelete: "cascade"
        })
        Location.hasMany(models.Pickup_schedule,{
          onDelete: "cascade"
        })
      };
    return Location;
  };
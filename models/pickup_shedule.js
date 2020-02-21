module.exports = function(sequelize, DataTypes) {
    var Pickup_schedule = sequelize.define("Pickup_schedule", {
      date:{ type: DataTypes.DATE, allowNull: false},
    });
    Pickup_schedule.associate = function(models) {
        Pickup_schedule.belongsTo(models.Company_profile, {
          foreignKey: {
            allowNull: false
          }
        });
        Pickup_schedule.belongsTo(models.Location, {
          foreignKey: {
            allowNull: false
          }
        });

      };
    return Pickup_schedule;
  };
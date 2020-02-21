module.exports = function(sequelize, DataTypes) {
    var Company_profile = sequelize.define("Company_profile", {
      company_name:{ type: DataTypes.STRING, allowNull: false},
      ein: { type: DataTypes.INTEGER, allowNull: false},
      account_type:{ type: DataTypes.BOOLEAN, defaultValue:false},
    });
  
    Company_profile.associate = function(models) {
      Company_profile.hasMany(models.Location, {
        onDelete: "cascade"
      });
      Company_profile.hasMany(models.User_profile, {
        onDelete: "cascade"
      });
      Company_profile.hasMany(models.Pickup_schedule, {
        onDelete: "cascade"
      });
      Company_profile.hasMany(models.Inventory_donated, {
        onDelete: "cascade"
      });
      Company_profile.hasMany(models.Inventory, {
        onDelete: "cascade"
      });
 
    };
  
    return Company_profile;
  };

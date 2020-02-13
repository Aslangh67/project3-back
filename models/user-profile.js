module.exports = function(sequelize, DataTypes) {
    var User_profile = sequelize.define("User_profile", {
      username:{ type: DataTypes.STRING, allowNull: false},
      password:{ type: DataTypes.STRING, allowNull: false},
      first_name:{ type: DataTypes.STRING, allowNull: false},
      last_name:{ type: DataTypes.STRING, allowNull: false},
      email:{ type: DataTypes.STRING, allowNull: false},
      admin:{ type: DataTypes.BOOLEAN, defaultValue:false}
    });
    User_profile.associate = function(models) {
        User_profile.belongsTo(models.Company_profile, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return User_profile;
  };
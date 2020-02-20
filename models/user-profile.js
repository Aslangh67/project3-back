var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
    var User_profile = sequelize.define("User_profile", {
      username:{ type: DataTypes.STRING, allowNull: false, unique: true},
      password:{ type: DataTypes.STRING, allowNull: false},
      first_name:{ type: DataTypes.STRING, allowNull: false},
      last_name:{ type: DataTypes.STRING, allowNull: false},
      email:{ type: DataTypes.STRING, allowNull: false},
      admin:{ type: DataTypes.BOOLEAN, defaultValue:false}
    });
    User_profile.associate = function(models) {
        User_profile.belongsTo(models.Company_profile, {
          foreignKey: {
            // name: "company_id",
            allowNull: false
          }
        });
      };

      User_profile.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      })
      
    return User_profile;
  };
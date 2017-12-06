'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function(models) {
    User.belongsToMany(models.Subject,{through : 'UserSubject'})
    User.hasMany(models.UserSubject)
  }
  return User;
};

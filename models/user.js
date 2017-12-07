'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username : DataTypes.STRING,
    email    : DataTypes.STRING,
    password : DataTypes.STRING
  });

  User.associate=function(models) {
    User.hasMany(models.UserSubject)
    User.belongsToMany(models.Subject,{through:'UserSubject'})
  }

  User.beforeCreate( (user,options) => {
    return bcrypt.hash(user.password, 10).then( hash => {
      user.password = hash
    });
  });

  // User.prototype.compare_password = ((plain_password, cb) => {
  //   console.log('Masuk ke compare')
  //   bcrypt.compare(plain_password, this.password).then( res => {
  //     console.log(" ini dalam checker");
  //     cb(res)
  //   });
  // })

    return User;
};


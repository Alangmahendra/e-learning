'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  });
  Subject.associate=function(models) {
    Subject.hasMany(models.Question)
    Subject.hasMany(models.UserSubject)
    Subject.belongsToMany(models.User,{through:'UserSubject'})
  }
  return Subject;
};

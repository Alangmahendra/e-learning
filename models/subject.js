'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  });
  Subject.associate = function(models) {
    Subject.belongsToMany(models.User,{through:'UserSubject'})
    Subject.hasMany(models.UserSubject)
    Subject.hasMany(models.Question)
  }
  return Subject;
};

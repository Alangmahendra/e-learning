'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSubject = sequelize.define('UserSubject', {
    UserId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  });
  UserSubject.associate = function(models) {
    UserSubject.belongsTo(models.Subject)
    UserSubject.belongsTo(models.User)
  }

  return UserSubject;
};

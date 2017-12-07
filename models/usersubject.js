'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserSubject = sequelize.define('UserSubject', {
    UserId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  });
    UserSubject.associate=function (models) {
      UserSubject.belongsTo(models.User)
      UserSubject.belongsTo(models.Subject)
    }
  return UserSubject;
};

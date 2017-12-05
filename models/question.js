'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    answer: DataTypes.BOOLEAN,
    SubjectId: DataTypes.INTEGER
  });
  Question.associate=function(models) {
    Question.belongsTo(models.Subject)
  }
  return Question;
};

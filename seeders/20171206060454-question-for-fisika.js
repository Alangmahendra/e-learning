'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */return queryInterface.bulkInsert('Questions', [
      {question:'Water is an example of a chemical element',answer:'false',SubjectId:1},
      {question:'Kelvin is a measure of temperature',answer:'true',SubjectId:1},
      {question:'Oxygen is the first element on the periodic table',answer:'false',SubjectId:1},
      {question:'Electron is the centre of an atom',answer:'false',SubjectId:1},
      {question:'Acids have a pH level below 7',answer:'true',SubjectId:1},
      {question:'Nitrogen is the main gas found in the air we breathe',answer:'true',SubjectId:1},
      {question:'An electron carries a positive charge',answer:'false',SubjectId:1},
      {question:'At room temperature, Mercury is the only metal that is in liquid form.',answer:'true',SubjectId:1},
      {question:'H20 more commonly known as Water.',answer:'true',SubjectId:1},
      {question:'K is the chemical symbol for Potassium.',answer:'true',SubjectId:1},
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

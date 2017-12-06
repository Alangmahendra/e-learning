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
      {question:'The Atlantic Ocean is the biggest ocean on Earth',answer:'false',SubjectId:3},
      {question:'Venus is the closest planet to the Sun',answer:'false',SubjectId:3},
      {question:'Mount Everest is the tallest mountain in the world',answer:'true',SubjectId:3},
      {question:'Iron and Nickel are the two main metals in the earth’s core',answer:'',SubjectId:3},
      {question:'The center of the earth is hotter than surface of the sun',answer:'true',SubjectId:3},
      {question:'The Grand Canyon is around 10000 feet (3000 meters) deep.',answer:'false',SubjectId:3},
      {question:'Outside of Antarctica, The Sahara Desert in Africa is the largest desert in the world.',answer:'true',SubjectId:3},
      {question:'The Great Barrier Reef is found off the coast of United STATUS_CODES.',answer:'false',SubjectId:3},
      {question:'falseThe gemstone ruby is typically Yellow color.',answer:'false',SubjectId:3},
      {question:'Someone who studies earthquakes is known as a geologist.',answer:'false',SubjectId:3},
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

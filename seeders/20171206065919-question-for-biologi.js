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
      {question:'Sharks are mammals',answer:'false',SubjectId:2},
      {question:'The human body has four lungs.',answer:'false',SubjectId:2},
      {question:'Herbivores eat meat.',answer:'false',SubjectId:2},
      {question:'Spiders have eight legs',answer:'true',SubjectId:2},
      {question:'The human skeleton is made up of less than 100 bones',answer:'false',SubjectId:2},
      {question:'Animals which eat both plants and other animals are known as Omnivore',answer:'true',SubjectId:2},
      {question:'frogs can live in salt water',answer:'false',SubjectId:2},
      {question:'Botany is the study of plants',answer:'true',SubjectId:2},
      {question:'Photosynthesis is the name of the process used by plants to convert sunlight into food',answer:'true',SubjectId:2},
      {question:'A change of the DNA in an organism that results in a new trait is known as MutationCallback',answer:'true',SubjectId:2},
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

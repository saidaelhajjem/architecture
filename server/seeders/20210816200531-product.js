'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('products', [{
        name: 'John Doe',
        description: "offfffffff this a description",
        price:123,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'John Doe',
      description: "offfffffff this a description",
      price:123,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  }
};

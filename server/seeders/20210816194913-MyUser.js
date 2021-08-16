'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('MyUsers', [{
        first_name: 'Doe',
        last_name: 'John',
        bio: 'xxxxxxxx uyyyyyyyyyyyy zzzzzzz',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MyUsers', [{
      first_name: 'Doe',
      last_name: 'John',
      bio: 'xxxxxxxx uyyyyyyyyyyyy zzzzzzz',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  }
};

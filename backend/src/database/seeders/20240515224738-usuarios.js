'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'Lionel Messi',
      email: 'lionel@gmail.com.ar',
      phone: '1126416625',
      instagram: 'pessi17',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
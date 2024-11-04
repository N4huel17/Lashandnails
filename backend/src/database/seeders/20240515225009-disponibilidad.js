'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Availabilities', [{
      date: '2024-05-07',
      start_time: '09:00:00',
      end_time: '17:00:00',
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Availabilities', null, {});
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Appointments', [{
      userId: 1,
      serviceId: 1,
      date: '2024-05-07',
      time: '16:00:00',
      fechaHoraAgendado: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, // Aseguramos que el nombre no sea nulo
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // Aseguramos que el email no sea nulo
        unique: true, // Aseguramos que el email sea único
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true, // Puedes permitir que el número de teléfono sea nulo
      },
      instagram: {
        type: Sequelize.STRING,
        allowNull: true, // Puedes permitir que el campo sea nulo
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Valor por defecto
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // Actualización automática del timestamp
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
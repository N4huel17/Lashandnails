'use strict';
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insertar el servicio
    const service = await queryInterface.bulkInsert('Services', [{
      name: 'CAPPING POLIGEL',
      description: 'Un servicio de capping poligel de alta calidad',
      price: 2000.00,
      time: '40 minutos aproximadamente',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    // Insertar la imagen asociada al servicio
    const imagePath = 'poligel.png';
    const absoluteImagePath = path.join(__dirname, '../../public/img', imagePath);

    await queryInterface.bulkInsert('ServiceImages', [{
      serviceId: service.id,
      image_path: absoluteImagePath,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    return service;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Services', null, {});
    await queryInterface.bulkDelete('ServiceImages', null, {});
  }
};
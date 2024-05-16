'use strict';
const path = require('path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ruta de la imagen relativa a la carpeta 'public/img/'
    const imagePath = 'poligel2.jpg';
    
    // Obtén la ruta absoluta de la imagen
    const absoluteImagePath = path.join(__dirname, '../../public/img', imagePath);

    await queryInterface.bulkInsert('ServiceImages', [{
      serviceId: 1,
      image_path: absoluteImagePath, // Utiliza la ruta absoluta de la imagen
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ServiceImages', null, {});
  }
};
'use strict';

var main_image= [
{
  serviceId: 1,
  image_path:'poligel2.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
}
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ServiceImages', main_image, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ServiceImages', null, {});
  }
};
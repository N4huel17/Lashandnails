'use strict';

var main_image= [
{
  serviceId: 1,
  image_path:'poligel2.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 2,
  image_path:'esmaltado-semi.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 3,
  image_path:'acrilico.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 4,
  image_path:'sofgel.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 5,
  image_path:'esculpidassss.jpg' , // Utiliza la ruta absoluta de la imagen
  createdAt: new Date(),
  updatedAt: new Date()
},
]
module.exports =  {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ServiceImages', main_image, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ServiceImages', null, {});
  }
};
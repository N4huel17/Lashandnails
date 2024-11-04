'use strict';

var main_image= [
{
  serviceId: 1,
  image_path:'poligel2.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 2,
  image_path:'esmaltado-semi.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 3,
  image_path:'acrilico.jpg' ,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 4,
  image_path:'sofgel.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 5,
  image_path:'esculpidassss.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  serviceId: 6,
  image_path:'azul.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},{
  serviceId: 7,
  image_path:'esculpidas-acri3.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},{
  serviceId: 8,
  image_path:'ada.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
},{
  serviceId: 9,
  image_path:'press.jpg' , 
  createdAt: new Date(),
  updatedAt: new Date()
}
]
module.exports =  {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ServiceImages', main_image, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ServiceImages', null, {});
  }
};
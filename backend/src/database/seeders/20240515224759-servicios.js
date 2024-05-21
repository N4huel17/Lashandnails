'use strict';

const serviceJSON=require('../../data/Services.json')
const servicesDB= serviceJSON.map((services,index) => {
  return {
    name:services.name,
    description:services.description,
    price:services.price,
    time:services.time,
    main_image:services.mainImage,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert(
      'Services',
      servicesDB,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Services', null, {});

  }
};

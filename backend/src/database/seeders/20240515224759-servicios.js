
const serviceJSON=require('../../data/Services.json')
const servicesDB= serviceJSON.map((services) => {
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
module.exports =  {
  async up(queryInterface) {


    await queryInterface.bulkInsert(
      'Services',
      servicesDB,
      {});

  },

  async down(queryInterface) {

    await queryInterface.bulkDelete('Services', null, {});

  }
};

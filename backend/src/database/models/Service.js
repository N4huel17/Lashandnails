'use strict';
const { Model } = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Appointment, {
        foreignKey: 'serviceId',
        as: 'appointments',
      });
      Service.hasMany(models.ServiceImage, {
        foreignKey: 'serviceId',
        as: 'images',
      });
    }
  }

  Service.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT,
      time: DataTypes.STRING,
      main_Image: DataTypes.STRING,
     
    },
    {
      sequelize,
      modelName: 'Service',
    }
  );

  return Service;
};
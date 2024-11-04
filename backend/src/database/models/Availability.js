'use strict';

const { Model } = require('sequelize');

module.exports =  (sequelize, DataTypes) => {
  class Availability extends Model {
    static associate() {
     
    }
  }

  Availability.init(
    {
      date: DataTypes.DATE,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      is_available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Availability',
    }
  );

  return Availability;
};
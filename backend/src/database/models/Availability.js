'use strict';

import { Model } from 'sequelize';

module.exports =  (sequelize, DataTypes) => {
  class Availability extends Model {
    static associate() {
      // Aquí puedes definir asociaciones si es necesario
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
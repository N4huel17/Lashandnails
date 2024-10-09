'use strict';
import { Model } from 'sequelize';

module.exports =  (sequelize, DataTypes) => {
  class ServiceImage extends Model {
    static associate(models) {
      ServiceImage.belongsTo(models.Service, {
        foreignKey: 'serviceId',
        as: 'service',
      });
    }
  }

  ServiceImage.init(
    {
      serviceId: DataTypes.INTEGER,
      image_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ServiceImage',
    }
  );

  return ServiceImage;
};
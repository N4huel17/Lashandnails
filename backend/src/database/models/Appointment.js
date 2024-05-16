'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      Appointment.belongsTo(models.Service, {
        foreignKey: 'serviceId',
        as: 'service'
      });
    }
  }
  Appointment.init({
    userId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    fechaHoraAgendado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
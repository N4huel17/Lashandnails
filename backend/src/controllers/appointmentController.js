
const { Appointment } = require('../database/models/index');

const getAppointments = async (req, res) => {
  const appointments = await Appointment.findAll();
  res.json(appointments);
};

const getAppointmentById = async (req, res) => {
  const appointment = await Appointment.findByPk(req.params.id);
  res.json(appointment);
};

const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
};

const updateAppointment = async (req, res) => {
  const appointment = await Appointment.update(req.body, { where: { id: req.params.id } });
  res.json(appointment);
};

const deleteAppointment = async (req, res) => {
  await Appointment.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Appointment deleted' });
};

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};

// controllers/appointmentController.js
import { Appointment } from '../database/models.js';

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.findAll();
  res.json(appointments);
};

export const getAppointmentById = async (req, res) => {
  const appointment = await Appointment.findByPk(req.params.id);
  res.json(appointment);
};

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
};

export const updateAppointment = async (req, res) => {
  const appointment = await Appointment.update(req.body, { where: { id: req.params.id } });
  res.json(appointment);
};

export const deleteAppointment = async (req, res) => {
  await Appointment.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Appointment deleted' });
};
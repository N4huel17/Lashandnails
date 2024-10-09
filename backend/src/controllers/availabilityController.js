// controllers/availabilityController.js
import { Availability } from '../database/models.js';

export const getAvailabilities = async (req, res) => {
  const availabilities = await Availability.findAll();
  res.json(availabilities);
};

export const getAvailabilityById = async (req, res) => {
  const availability = await Availability.findByPk(req.params.id);
  res.json(availability);
};

export const createAvailability = async (req, res) => {
  const availability = await Availability.create(req.body);
  res.json(availability);
};

export const updateAvailability = async (req, res) => {
  const availability = await Availability.update(req.body, { where: { id: req.params.id } });
  res.json(availability);
};

export const deleteAvailability = async (req, res) => {
  await Availability.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Availability deleted' });
};
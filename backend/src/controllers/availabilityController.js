
const { Availability } = require('../database/models/index');

const getAvailabilities = async (req, res) => {
  const availabilities = await Availability.findAll();
  res.json(availabilities);
};

const getAvailabilityById = async (req, res) => {
  const availability = await Availability.findByPk(req.params.id);
  res.json(availability);
};

const createAvailability = async (req, res) => {
  const availability = await Availability.create(req.body);
  res.json(availability);
};

const updateAvailability = async (req, res) => {
  const availability = await Availability.update(req.body, { where: { id: req.params.id } });
  res.json(availability);
};

const deleteAvailability = async (req, res) => {
  await Availability.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Availability deleted' });
};

module.exports = {
  getAvailabilities,
  getAvailabilityById,
  createAvailability,
  updateAvailability,
  deleteAvailability,
};
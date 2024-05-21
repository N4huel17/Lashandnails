const { ServiceImage } = require('../database/models');

const getServiceImages = async (req, res) => {
  const serviceImages = await ServiceImage.findAll();
  res.json(serviceImages);
};

const getServiceImageById = async (req, res) => {
  const serviceImage = await ServiceImage.findByPk(req.params.id);
  res.json(serviceImage);
};

const createServiceImage = async (req, res) => {
  const serviceImage = await ServiceImage.create(req.body);
  res.json(serviceImage);
};

const updateServiceImage = async (req, res) => {
  const serviceImage = await ServiceImage.update(req.body, { where: { id: req.params.id } });
  res.json(serviceImage);
};

const deleteServiceImage = async (req, res) => {
  await ServiceImage.destroy({ where: { id: req.params.id } });
  res.json({ message: 'ServiceImage deleted' });
};

module.exports = { getServiceImages, getServiceImageById, createServiceImage, updateServiceImage, deleteServiceImage };
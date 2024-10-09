// controllers/serviceImageController.js
import { ServiceImage } from '../database/models.js';

export const getServiceImages = async (req, res) => {
  const serviceImages = await ServiceImage.findAll();
  res.json(serviceImages);
};

export const getServiceImageById = async (req, res) => {
  const serviceImage = await ServiceImage.findByPk(req.params.id);
  res.json(serviceImage);
};

export const createServiceImage = async (req, res) => {
  const serviceImage = await ServiceImage.create(req.body);
  res.json(serviceImage);
};

export const updateServiceImage = async (req, res) => {
  const serviceImage = await ServiceImage.update(req.body, { where: { id: req.params.id } });
  res.json(serviceImage);
};

export const deleteServiceImage = async (req, res) => {
  await ServiceImage.destroy({ where: { id: req.params.id } });
  res.json({ message: 'ServiceImage deleted' });
};
// controllers/serviceController.js
const { Service, ServiceImage } = require('../database/models');

const getServices = async (req, res) => {
  try {
    const { count, rows } = await Service.findAndCountAll({
      include: [
        {
          model: ServiceImage,
          as: 'images',
          attributes: ['id', 'image_path']
        }
      ],
      attributes: ['id', 'name', 'description', 'price', 'time']
    });

    const services = rows.map(service => {
      const images = service.images.map(image => ({
        id: image.id,
        image_path: `${req.protocol}://${req.get('host')}/img/${image.image_path.split('/').pop()}`
      }));
      return {
        ...service.dataValues,
        images
      };
    });

    return res.status(200).json({
      ok: true,
      count,
      services
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || 'There was a problem, sorry.'
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id, {
      include: [
        {
          model: ServiceImage,
          as: 'images',
          attributes: ['id', 'image_path']
        }
      ],
      attributes: ['id', 'name', 'description', 'price', 'time']
    });

    if (!service) {
      return res.status(404).json({
        ok: false,
        msg: 'Service not found'
      });
    }

    const images = service.images.map(image => ({
      id: image.id,
      image_path: `${req.protocol}://${req.get('host')}/img/${image.image_path.split('/').pop()}`
    }));

    return res.status(200).json({
      ok: true,
      service: {
        ...service.dataValues,
        images
      }
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || 'There was a problem, sorry.'
    });
  }
};

const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    return res.status(201).json({
      ok: true,
      service
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || 'There was a problem, sorry.'
    });
  }
};

const updateService = async (req, res) => {
  try {
    const [updated] = await Service.update(req.body, {
      where: { id: req.params.id }
    });

    if (updated) {
      const updatedService = await Service.findByPk(req.params.id);
      return res.status(200).json({
        ok: true,
        service: updatedService
      });
    }
    throw new Error('Service not found');
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || 'There was a problem, sorry.'
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const deleted = await Service.destroy({
      where: { id: req.params.id }
    });

    if (deleted) {
      return res.status(200).json({
        ok: true,
        msg: 'Service deleted'
      });
    }
    throw new Error('Service not found');
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || 'There was a problem, sorry.'
    });
  }
};

module.exports = { getServices, getServiceById, createService, updateService, deleteService };
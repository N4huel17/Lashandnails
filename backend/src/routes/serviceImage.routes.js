
const express = require('express');
const {
  getServiceImages,
  getServiceImageById,
  createServiceImage,
  updateServiceImage,
  deleteServiceImage
} = require('../controllers/serviceImageController');

const router = express.Router();

router.get('/', getServiceImages);
router.get('/:id', getServiceImageById);
router.post('/', createServiceImage);
router.put('/:id', updateServiceImage);
router.delete('/:id', deleteServiceImage);

module.exports = router;
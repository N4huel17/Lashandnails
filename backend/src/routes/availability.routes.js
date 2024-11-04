
const express = require('express');
const {
  getAvailabilities,
  getAvailabilityById,
  createAvailability,
  updateAvailability,
  deleteAvailability
} = require('../controllers/availabilityController');

const router = express.Router();

router.get('/', getAvailabilities);
router.get('/:id', getAvailabilityById);
router.post('/', createAvailability);
router.put('/:id', updateAvailability);
router.delete('/:id', deleteAvailability);

module.exports = router;
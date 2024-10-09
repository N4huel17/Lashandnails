import express from 'express';
import { getAvailabilities, getAvailabilityById, createAvailability, updateAvailability, deleteAvailability } from '../controllers/availabilityController.js';

const router = express.Router();

router.get('/', getAvailabilities);
router.get('/:id', getAvailabilityById);
router.post('/', createAvailability);
router.put('/:id', updateAvailability);
router.delete('/:id', deleteAvailability);

export default router;
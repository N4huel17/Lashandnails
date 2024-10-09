import express from 'express';
import { getServiceImages, getServiceImageById, createServiceImage, updateServiceImage, deleteServiceImage } from '../controllers/serviceImageController.js';

const router = express.Router();

router.get('/', getServiceImages);
router.get('/:id', getServiceImageById);
router.post('/', createServiceImage);
router.put('/:id', updateServiceImage);
router.delete('/:id', deleteServiceImage);

export default router;
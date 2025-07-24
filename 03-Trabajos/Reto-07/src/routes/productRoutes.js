import express from 'express';
import { logger } from '..middlewares/logger.js';
import { addProduct, getProduct } from '../controllers/productsController.js';

const router = express.Router();

router.get('/products', logger, getProduct);
router.post('/products', logger, addProduct);

export default router;
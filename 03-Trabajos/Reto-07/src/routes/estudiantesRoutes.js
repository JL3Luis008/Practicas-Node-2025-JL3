import express from 'express';
import { logger } from '../middlewares/logger.js';
import { addUser, getEstudiantes } from '../controllers/estudiantesController.js';

const router = express.Router();

router.get('/estudiantes', logger, getEstudiantes);
router.post('/estudiantes', logger, addUser);

export default router;
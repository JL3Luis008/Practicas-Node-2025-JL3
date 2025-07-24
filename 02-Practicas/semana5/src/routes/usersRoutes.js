import express from 'express';
import { logger } from '../middlewares/logger';
import { addUser, getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/users', logger, getUsers);
router.post('/users', logger, addUser);

export default router;
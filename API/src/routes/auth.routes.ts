
import express from 'express';
import { createUsers, loginUser, getUsers } from '../controllers/user.controllers';
import { authenticateJWT } from '../middleware/verifyTkn';

const router = express.Router();

router.post('/register', createUsers);
router.post('/login', loginUser);
router.get('/users', authenticateJWT, getUsers);

export default router;

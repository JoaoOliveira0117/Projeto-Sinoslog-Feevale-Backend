import { Router } from 'express';
import createAuthController from '../../controllers/auth/createAuthController.js';
import createAuthValidation from '../../validation/auth/createAuthValidation.js';
import auth from '../../middlewares/auth.js';
import getUserMeController from '../../controllers/auth/getUserMeController.js';

const router = Router();

router.post('/login', createAuthValidation, createAuthController);

router.use(auth);

router.get('/me', getUserMeController);

export default router;

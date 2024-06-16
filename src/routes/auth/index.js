import { Router } from 'express';
import createAuthController from '../../controllers/auth/createAuthController.js';
import createAuthValidation from '../../validation/auth/createAuthValidation.js';

const router = Router();

router.post('/login', createAuthValidation, createAuthController);

export default router;

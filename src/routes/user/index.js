import { Router } from 'express';
import GetUserController from '../../controllers/user/GetUserController.js';
import createUserController from '../../controllers/user/createUserController.js';
import createUserValidation from '../../validation/user/createUserValidation.js';

const router = Router();

router.get('/', GetUserController);
router.post('/', createUserValidation, createUserController);

export default router;

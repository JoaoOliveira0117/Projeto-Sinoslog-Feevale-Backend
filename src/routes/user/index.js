import { Router } from 'express';
import getUserController from '../../controllers/user/getUserController.js';
import createUserController from '../../controllers/user/createUserController.js';
import getByIdUserController from '../../controllers/user/getByIdUserController.js';
import updateUserController from '../../controllers/user/updateUserController.js';
import deleteUserController from '../../controllers/user/deleteUserController.js';

import createUserValidation from '../../validation/user/createUserValidation.js';

const router = Router();

router.get('/', getUserController);
router.get('/:id', getByIdUserController);
router.post('/', createUserValidation, createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;

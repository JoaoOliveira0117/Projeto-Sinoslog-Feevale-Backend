import { Router } from 'express';
import getUserController from '../../controllers/user/getUserController.js';
import createUserController from '../../controllers/user/createUserController.js';
import getByIdUserController from '../../controllers/user/getByIdUserController.js';
import updateUserController from '../../controllers/user/updateUserController.js';
import deleteUserController from '../../controllers/user/deleteUserController.js';

import createUserValidation from '../../validation/user/createUserValidation.js';
import getUserByIdValidation from '../../validation/user/getUserByIdValidation.js';
import deleteUserByIdValidation from '../../validation/user/deleteUserByIdValidation.js';
import updateUserByIdValidation from '../../validation/user/updateUserByIdValidation.js';
import auth from '../../middlewares/auth.js';

const router = Router();

router.use(auth);

router.get('/', getUserController);
router.get('/:id', getUserByIdValidation, getByIdUserController);
router.post('/', createUserValidation, createUserController);
router.put('/:id', updateUserByIdValidation, updateUserController);
router.delete('/:id', deleteUserByIdValidation, deleteUserController);

export default router;

import { Router } from 'express';
import auth from '../../middlewares/auth.js';
import getOccurrenceController from '../../controllers/occurrence/getOccurrenceController.js';
import createOccurrenceController from '../../controllers/occurrence/createOccurrenceController.js';
import getByIdOccurrenceController from '../../controllers/occurrence/getByIdOccurrenceController.js';
import updateOccurrenceController from '../../controllers/occurrence/updateOccurrenceController.js';
import deleteOccurrenceController from '../../controllers/occurrence/deleteOccurrenceController.js';

import createOccurrenceValidation from '../../validation/occurrence/createOccurrenceValidation.js';
import getOccurrenceByIdValidation from '../../validation/occurrence/getOccurrenceByIdValidation.js';
import deleteOccurrenceByIdValidation from '../../validation/occurrence/deleteOccurrenceByIdValidation.js';
import updateOccurrenceByIdValidation from '../../validation/occurrence/updateOccurrenceByIdValidation.js';
import upload from '../../middlewares/upload.js';
import previewOccurrenceImageController from '../../controllers/occurrence/previewOccurrenceImageController.js';
import getMyOccurrenceController from '../../controllers/occurrence/getMyOccurrenceController.js';

const router = Router();

router.use(auth);

router.get('/', getOccurrenceController);
router.get('/me', getMyOccurrenceController);
router.get('/:id', getOccurrenceByIdValidation, getByIdOccurrenceController);
router.get(
  '/:id/preview',
  getOccurrenceByIdValidation,
  previewOccurrenceImageController
);
router.post(
  '/',
  upload.single('occurrenceImage'),
  createOccurrenceValidation,
  createOccurrenceController
);
router.put('/:id', updateOccurrenceByIdValidation, updateOccurrenceController);
router.delete(
  '/:id',
  deleteOccurrenceByIdValidation,
  deleteOccurrenceController
);

export default router;

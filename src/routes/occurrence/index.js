import { Router } from 'express';
import getOccurrenceController from '../../controllers/occurrence/getOccurrenceController.js';
import createOccurrenceController from '../../controllers/occurrence/createOccurrenceController.js';
import getByIdOccurrenceController from '../../controllers/occurrence/getByIdOccurrenceController.js';
import updateOccurrenceController from '../../controllers/occurrence/updateOccurrenceController.js';
import deleteOccurrenceController from '../../controllers/occurrence/deleteOccurrenceController.js';

import createOccurrenceValidation from '../../validation/occurrence/createOccurrenceValidation.js';
import getOccurrenceByIdValidation from '../../validation/occurrence/getOccurrenceByIdValidation.js';
import deleteOccurrenceByIdValidation from '../../validation/occurrence/deleteOccurrenceByIdValidation.js';
import updateOccurrenceByIdValidation from '../../validation/occurrence/updateOccurrenceByIdValidation.js';

const router = Router();

router.get('/', getOccurrenceController);
router.get('/:id', getOccurrenceByIdValidation, getByIdOccurrenceController);
router.post('/', createOccurrenceValidation, createOccurrenceController);
router.put('/:id', updateOccurrenceByIdValidation, updateOccurrenceController);
router.delete(
  '/:id',
  deleteOccurrenceByIdValidation,
  deleteOccurrenceController
);

export default router;

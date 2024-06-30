import { z } from 'zod';
import validate from '../../middlewares/validate.js';
import zDocumentExists from '../shared/zGetDocumentFromUuid.js';
import OccurrenceService from '../../services/occurrence.js';

const userSchema = z
  .object({
    id: zDocumentExists(OccurrenceService),
  })
  .strict();

export default validate({ params: userSchema });

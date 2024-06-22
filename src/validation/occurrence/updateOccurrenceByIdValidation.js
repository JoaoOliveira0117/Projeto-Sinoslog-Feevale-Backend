import { z } from 'zod';
import validate from '../../middlewares/validate.js';
import zDocumentExists from '../shared/zDocumentExists.js';
import occurrenceSchema from './index.js';
import OccurrenceService from '../../services/occurrence.js';

const paramsSchema = z
  .object({
    id: zDocumentExists(OccurrenceService),
  })
  .strict();

const bodySchema = occurrenceSchema.nullable();

export default validate({ params: paramsSchema, body: bodySchema });

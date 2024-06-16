import { z } from 'zod';
import validate from '../../middlewares/validate.js';
import zDocumentExists from '../shared/zGetDocumentFromUuid.js';
import UserService from '../../services/user.js';

const paramsSchema = z
  .object({
    id: zDocumentExists(UserService),
  })
  .strict();

const bodySchema = z
  .object({
    name: z.string().min(1, 'Name is required').optional(),
    email: z.string().email('Invalid email address').optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .optional(),
  })
  .strict()
  .nullable();

export default validate({ params: paramsSchema, body: bodySchema });

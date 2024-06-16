import { z } from 'zod';
import validate from '../../middlewares/validate.js';
import zGetDocumentFromEmail from '../shared/zGetDocumentFromEmail.js';
import Auth from '../../services/auth.js';

const userSchema = z
  .object({
    email: zGetDocumentFromEmail(Auth),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  })
  .strict()
  .nullable();

export default validate({ body: userSchema });

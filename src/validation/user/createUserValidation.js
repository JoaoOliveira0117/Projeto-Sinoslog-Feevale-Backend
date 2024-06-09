import { z } from 'zod';
import validate from '../../middlewares/validate.js';

const userSchema = z
  .object({
    body: {
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email address'),
      password: z
        .string()
        .min(6, 'Password must be at least 6 characters long'),
    },
  })
  .nullable();

export default validate(userSchema);

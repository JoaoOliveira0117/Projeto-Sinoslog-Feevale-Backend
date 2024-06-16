import { z } from 'zod';
import validate from '../../middlewares/validate.js';
import zDocumentExists from '../shared/zGetDocumentFromUuid.js';
import UserService from '../../services/user.js';

const userSchema = z
  .object({
    id: zDocumentExists(UserService),
  })
  .strict();

export default validate({ params: userSchema });

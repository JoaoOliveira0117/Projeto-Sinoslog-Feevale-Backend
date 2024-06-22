import { Router } from 'express';

import auth from './auth/index.js';
import health from './health/index.js';
import user from './user/index.js';
import occurrence from './occurrence/index.js';

const router = Router();

router.use('/auth', auth);
router.use('/health', health);
router.use('/occurrences', occurrence);
router.use('/users', user);

export default router;

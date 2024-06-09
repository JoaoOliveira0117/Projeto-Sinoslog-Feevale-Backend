import { Router } from 'express';

import health from './health/index.js';
import user from './user/index.js';

const router = Router();

router.use('/health', health);
router.use('/users', user);

export default router;

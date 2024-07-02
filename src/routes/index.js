import { Router } from 'express';

import auth from './auth/index.js';
import health from './health/index.js';
import user from './user/index.js';
import occurrence from './occurrence/index.js';

import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/sinoslog', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'http', 'index.html'));
});

router.use('/auth', auth);
router.use('/health', health);
router.use('/occurrences', occurrence);
router.use('/users', user);

export default router;

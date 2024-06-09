import { Router } from 'express';
import getHealthController from '../../controllers/health/getHealthController.js';

const router = Router();

router.get('/', getHealthController);

export default router;

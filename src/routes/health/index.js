import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /health:
 *  get:
 *    tags: ['Admin']
 *    summary: Verifica a saúde da API
 *    description: Verifica a saúde da API
 *    responses:
 *      200:
 *        description: Mensagem de sucesso
 */

router.get('/', (_, res) => {
  return res.json({ message: 'Im Healthy!' });
});

export default router;

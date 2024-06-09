import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     HealthResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Im Healthy!
 */

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
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HealthResponse'
 */

class GetHealthController extends Controller {
  async handle() {
    return this.success({ message: 'Im Healthy!' });
  }
}

export default asyncHandler(GetHealthController);

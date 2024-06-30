import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import AuthService from '../../services/auth.js';

/**
 * @swagger
 * /auth/me:
 *  get:
 *    tags: ['Auth']
 *    summary: Retorna o usuário atual logado
 *    description: Retorna o usuário atual logado
 *    responses:
 *      201:
 *        description: Retorna o usuário logado
 *        content:
 *          application/json:
 *            schema:
 *              allOf:
 *                - $ref: '#/components/schemas/User'
 *                - type: object
 *                  properties:
 *                    token:
 *                      type: string
 */

class GetUserMeController extends Controller {
  async handle() {
    const { userId } = this.req;
    const service = new AuthService();
    const data = await service.getById(userId);

    return this.success(data);
  }
}

export default asyncHandler(GetUserMeController);

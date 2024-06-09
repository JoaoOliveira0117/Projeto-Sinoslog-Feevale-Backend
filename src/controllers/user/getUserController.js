import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users:
 *  get:
 *    tags: ['User']
 *    summary: Retorna os usuários cadastrados
 *    description: Retorna os usuários cadastrados
 *    responses:
 *      200:
 *        description: Lista de usuários
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

class GetUserController extends Controller {
  async handle() {
    const service = new UserService();

    const data = await service.getAll();

    return this.success(data);
  }
}

export default asyncHandler(GetUserController);

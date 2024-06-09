import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags: ['User']
 *    summary: Retorna o usuário cadastrado
 *    description: Retorna o usuário cadastrado
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID do usuário
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: usuário
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

class GetUserByIdController extends Controller {
  async handle() {
    const service = new UserService();

    const data = await service.getById(this.req.params.id);

    return this.success(data);
  }
}

export default asyncHandler(GetUserByIdController);

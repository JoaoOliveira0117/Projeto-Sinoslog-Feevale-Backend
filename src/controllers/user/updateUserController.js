import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags: ['User']
 *    summary: Atualiza um usuário e retorna-o
 *    description: Atualiza um usuário e retorna-o
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID do usuário
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: Usuário atualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

class UpdateUserController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new UserService();

    const data = await service.updateById(this.req.params.id, body);

    return this.success(data);
  }
}

export default asyncHandler(UpdateUserController);

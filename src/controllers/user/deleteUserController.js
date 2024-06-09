import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    tags: ['User']
 *    summary: Remove um usuário do banco
 *    description: Remove um usuário do banco
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID do usuário
 *        schema:
 *          type: string
 */

class DeleteUserController extends Controller {
  async handle() {
    const service = new UserService();

    const data = await service.deleteById(this.req.params.id);

    return this.success(data);
  }
}

export default asyncHandler(DeleteUserController);

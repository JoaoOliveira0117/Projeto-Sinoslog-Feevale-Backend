import Controller from '../../config/api/controller.js';
import UserService from '../../services/user.js';

/**
 * @swagger
 * /users:
 *  post:
 *    tags: ['User']
 *    summary: Retorna os usuários cadastrados
 *    description: Retorna os usuários cadastrados
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
 *        description: Lista de usuários
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */

class CreateUserController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new UserService();

    const data = await service.create(body);

    return this.success(data);
  }
}

export default (req, res) => new CreateUserController(req, res);

import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import AuthService from '../../services/auth.js';

/**
 * @swagger
 * /auth/login:
 *  post:
 *    tags: ['Auth']
 *    summary: Realiza o login do usuário
 *    description: Realiza o login do usuário e retorna um token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: Usuário criado
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

class CreateAuthController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new AuthService();
    const data = await service.create(body);

    return this.success(data);
  }
}

export default asyncHandler(CreateAuthController);

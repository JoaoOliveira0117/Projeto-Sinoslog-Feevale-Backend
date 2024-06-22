import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences:
 *  post:
 *    tags: ['Occurrence']
 *    summary: Cria uma ocorrencia e retorna-a
 *    description: Cria uma ocorrencia e retorna-a
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 *              type:
 *                type: string
 *              address:
 *                type: string
 *              latitude:
 *                type: number
 *              longitude:
 *                type: number
 *              date:
 *                type: string
 *    responses:
 *      201:
 *        description: Ocorrencia criada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Occurrence'
 */

class CreateOcorrenciaController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new OccurrenceService();

    body.date = new Date();
    const data = await service.create(body);

    return this.success(data);
  }
}

export default asyncHandler(CreateOcorrenciaController);

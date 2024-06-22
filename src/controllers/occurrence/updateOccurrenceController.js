import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences/{id}:
 *  put:
 *    tags: ['Occurrence']
 *    summary: Atualiza uma ocorrência e retorna-o
 *    description: Atualiza um ocorrência e retorna-o
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID da ocorrencia
 *        schema:
 *          type: string
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
 *        description: Ocorrência atualizada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Occurrence'
 */

class UpdateOccurrenceController extends Controller {
  async handle() {
    const { body } = this.req;
    const service = new OccurrenceService();

    const data = await service.updateById(this.req.params.id, body);

    return this.success(data);
  }
}

export default asyncHandler(UpdateOccurrenceController);

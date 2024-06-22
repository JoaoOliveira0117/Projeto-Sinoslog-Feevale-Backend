import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences/{id}:
 *  get:
 *    tags: ['Occurrence']
 *    summary: Retorna a ocorrencia cadastrada
 *    description: Retorna a ocorrência cadastrada
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID da ocorrência
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: ocorrência
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Occurrence'
 */

class GetOcorrenciaByIdController extends Controller {
  async handle() {
    const service = new OccurrenceService();

    const data = await service.getById(this.req.params.id);

    return this.success(data);
  }
}

export default asyncHandler(GetOcorrenciaByIdController);

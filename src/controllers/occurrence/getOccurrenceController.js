import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences:
 *  get:
 *    tags: ['Occurrence']
 *    summary: Retorna as ocorrências cadastradas
 *    description: Retorna as ocorrências cadastradas
 *    responses:
 *      200:
 *        description: Lista de ocorrências
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Occurrence'
 */

class GetOccurrenceController extends Controller {
  async handle() {
    const service = new OccurrenceService();

    const data = await service.getAll();

    return this.success(data);
  }
}

export default asyncHandler(GetOccurrenceController);

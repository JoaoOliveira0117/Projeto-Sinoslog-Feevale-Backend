import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences/me:
 *  get:
 *    tags: ['Occurrence']
 *    summary: Retorna as ocorrências criadas pelo usuário atual
 *    description: Retorna as ocorrências criadas pelo usuário atual
 *    responses:
 *      200:
 *        description: Lista de ocorrências
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Occurrence'
 */

class GetMyOccurrenceController extends Controller {
  async handle() {
    const { userId } = this.req;
    const service = new OccurrenceService();

    const data = await service.getAllFromUser(userId);

    return this.success(data);
  }
}

export default asyncHandler(GetMyOccurrenceController);

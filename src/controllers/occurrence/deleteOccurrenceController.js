import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import OccurrenceService from '../../services/occurrence.js';

/**
 * @swagger
 * /occurrences/{id}:
 *  delete:
 *    tags: ['Occurrence']
 *    summary: Remove uma ocorrencia do banco
 *    description: Remove uma ocorrencia do banco
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID da ocorrencia
 *        schema:
 *          type: string
 */

class DeleteOcorrenciaController extends Controller {
  async handle() {
    const service = new OccurrenceService();

    const data = await service.deleteById(this.req.params.id);

    return this.success(data);
  }
}

export default asyncHandler(DeleteOcorrenciaController);

import Controller from '../../config/api/controller.js';
import asyncHandler from '../../http/asyncHandler.js';
import NotFoundError from '../../http/errors/notFoundError.js';
import OccurrenceService from '../../services/occurrence.js';
import { UPLOAD_DIR } from '../../middlewares/upload.js';

/**
 * @swagger
 * /occurrences/{id}/preview:
 *  get:
 *    tags: ['Occurrence']
 *    summary: Retorna a imagem da ocorrencia
 *    description: Retorna a imagem da ocorrencia
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: ID da ocorrência
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Imagem da ocorrencia
 */

class PreviewOccurrenceImageController extends Controller {
  async handle() {
    const service = new OccurrenceService();

    const data = await service.getById(this.req.params.id);

    if (!data.imagePath) {
      throw new NotFoundError('Image not found');
    }

    const imageUrl = UPLOAD_DIR + data.imagePath;

    return this.res.sendFile(imageUrl);
  }
}

export default asyncHandler(PreviewOccurrenceImageController);

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
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 *                required: false
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
 *                required: false
 *              occurrenceImage:
 *                type: string
 *                format: binary
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
    const { body, file, userId } = this.req;

    body.imagePath = '';

    if (file && file.fieldname === 'occurrenceImage') {
      body.imagePath = file.path.split('/').reverse()[0];
    }

    const service = new OccurrenceService();

    body.date = new Date();
    const data = await service.create({ ...body, createdBy: userId });

    return this.success(data);
  }
}

export default asyncHandler(CreateOcorrenciaController);

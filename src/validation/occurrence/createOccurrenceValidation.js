import validate from '../../middlewares/validate.js';
import occurrenceSchema from './index.js';

const occurance = occurrenceSchema.strict().nullable();

export default validate({ body: occurance });

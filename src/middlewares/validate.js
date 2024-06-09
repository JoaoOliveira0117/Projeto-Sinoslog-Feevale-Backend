import { StatusCodes } from 'http-status-codes';
import Controller from '../config/api/controller.js';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    const flattened = err.flatten();
    return new Controller(req, res).error(
      StatusCodes.UNPROCESSABLE_ENTITY,
      flattened.fieldErrors
    );
  }
};

export default validate;

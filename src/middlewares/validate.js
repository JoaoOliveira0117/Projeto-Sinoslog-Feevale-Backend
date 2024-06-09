import { StatusCodes } from 'http-status-codes';
import Controller from '../config/api/controller.js';

const validate = (schemas) => async (req, res, next) => {
  try {
    schemas.body && (await schemas.body.parseAsync(req.body));
    schemas.params && (await schemas.params.parseAsync(req.params));
    schemas.query && (await schemas.query.parseAsync(req.query));
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

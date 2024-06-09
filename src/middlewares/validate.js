import { StatusCodes } from 'http-status-codes';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    const flattened = err.flatten();
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: flattened.formErrors, errors: flattened.fieldErrors });
  }
};

export default validate;

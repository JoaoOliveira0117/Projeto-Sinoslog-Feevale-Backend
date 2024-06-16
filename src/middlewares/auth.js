import UnprocessableEntity from '../http/errors/unprocessableEntity.js';
import { verifyToken } from '../utils/jwt.js';
import logger from '../config/logger/winston.js';

const auth = (req, _, next) => {
  const header = req.headers['authorization'];

  if (!header) {
    throw new UnprocessableEntity('No token provided');
  }

  const parts = header.split(' ');

  if (parts.length !== 2) {
    throw new UnprocessableEntity('Token error');
  }

  const token = parts[1];

  try {
    const { data } = verifyToken(token);
    req.userId = data.userId;
    next();
  } catch (err) {
    logger.error(err);
    throw new UnprocessableEntity('Invalid token');
  }
};

export default auth;

import mongoose from 'mongoose';
import logger from '../logger/winston.js';

const db = async () => {
  try {
    logger.info('Connectiong to mongo server');
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('Successfully connected to database');
  } catch (err) {
    logger.error('Unable to connect to database ' + err);
    throw new Error(err);
  }
};

export default db;

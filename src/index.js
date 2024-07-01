import express from 'express';
import swaggerUi from 'swagger-ui-express';
import db from './config/db/connection.js';
import logger from './config/logger/winston.js';
import router from './routes/index.js';
import swaggerConfig from './config/docs/swagger.js';
import error from './middlewares/error.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

swaggerConfig.then((config) =>
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config))
);

app.use(express.json());
app.use('/', router);
app.use(error);

app.listen(port, async () => {
  await db();

  logger.info('Listening on port ' + port);
});

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import db from './config/db/connection.js';
import logger from './config/logger/winston.js';
import router from './routes/index.js';
import swaggerConfig from './config/docs/swagger.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

swaggerConfig.then((config) =>
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config))
);

app.use('/', router);

app.listen(port, async () => {
  await db();

  logger.info('Listening on port ' + port);
});

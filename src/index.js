import express from 'express';
import db from './config/db/connection.js';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await db();

  console.log('listening on port ' + port)
})
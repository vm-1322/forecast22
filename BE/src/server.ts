import express from 'express';

import { errorHandler } from './middlewares/error';
import * as db from './db';

const app = express();

const config = require('./config')[process.env.NODE_ENV || 'development'];

app.use(errorHandler);

db.connect(config.database.dsn)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(config.PORT, () => {
      console.log(`Server started at http://localhost:${config.PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error(err);
  });

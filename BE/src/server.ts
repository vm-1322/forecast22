import express, { NextFunction } from 'express';

import { errorHandler } from './middlewares/error';
import * as db from './db';
import apiRoutes from './routes/api';

const app = express();

const config = require('./config')[process.env.NODE_ENV || 'development'];

app.use((_, res: express.Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );

  next();
});

app.use('/api', apiRoutes);

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

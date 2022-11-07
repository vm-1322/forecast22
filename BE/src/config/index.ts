import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    PORT: process.env.PORT,
    database: {
      dsn: process.env.DEVELOPMENT_DB_DSN,
    },
  },
};

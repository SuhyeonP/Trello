import dotenv from 'dotenv';

import pkg from 'sequelize';
import createCardInstance from './card.js';
import createBoardInstance from './board.js';

dotenv.config();

const defineModels = db => {
  createCardInstance(db);
  createBoardInstance(db);
};

const createConnectionPool = () => {
  const { Sequelize } = pkg;

  return new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.PASSWORD,
    {
      host: process.env.HOST,
      dialect: process.env.DATABASE_DIALECT,
      dialectOptions: {
        dateStrings: true,
        typeCast: true,
      },
      timezone: process.env.TIMEZONE,
      port: process.env.DATABASE_PORT,
      pool: {
        max: Number(process.env.MAX_CONNECTION_COUNT),
        min: Number(process.env.MIN_CONNECTION_COUNT),
        acquire: process.env.ACQUIRE_MILESECOND,
        idle: process.env.IDEL_MILESECOND,
      },
    },
  );
};

const getDatabase = () => {
  const db = createConnectionPool();
  defineModels(db);
  return db;
};

export default getDatabase;

import 'reflect-metadata';
import dotenv from 'dotenv';

const localEnv = dotenv.config({ path: '.env' }).parsed;
const defaultEnv = dotenv.config({ path: 'default.env' }).parsed;

const joinedEnv = {
  ...defaultEnv,
  ...localEnv,
};

const config = {
  db: {
    dbName: joinedEnv.DB_NAME,
    username: joinedEnv.DB_USERNAME,
    password: joinedEnv.DB_PASSWORD,
    host: joinedEnv.DB_HOST,
    port: +joinedEnv.DB_PORT,
  },
};

export default config;

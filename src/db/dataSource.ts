import { DataSource } from 'typeorm';
// import dotenv from 'dotenv';
import config from '../config';
// import { entities } from './entities';

// const dotInfo = dotenv.config().parsed;
// const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: dotInfo!.DB_HOST,
//   port: +dotInfo!.DB_PORT,
//   username: dotInfo!.DB_USERNAME,
//   password: dotInfo!.DB_PASSWORD,
//   database: dotInfo!.DB_NAME,
//   synchronize: false,
//   logging: false,
//   entities: [`${__dirname}/entities/*.{ts,js}`],
//   migrations: [`${__dirname}/migrations/*.{ts,js}`],
//   subscribers: [],
// });

const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbName,
  synchronize: false,
  logging: false,
  entities: [`${__dirname}/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  subscribers: [],
});

// let connectedDataSource: DataSource | null = null;

// AppDataSource.initialize()
//   .then(async () => {
//     // eslint-disable-next-line no-console
//     console.log('Connection initialized with database...');
//   })
//   // eslint-disable-next-line no-console
//   .catch((error) => console.log(error));

// export const getRepository = async (): Promise<DataSource> => {
//   if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (AppDataSource.isInitialized) resolve(AppDataSource);
//       else reject(new Error('Failed to create connection with database'));
//     }, 3000);
//   });
// };

// export const connectionDB = async () => {
//   try {
//     if (!connectedDataSource) {
//       connectedDataSource = await AppDataSource.initialize();
//     }
//     return connectedDataSource;
//   } catch (err) {
//     // eslint-disable-next-line no-console
//     console.log('db connection faild', err.message);
//   }
// };

// export const getRepository = async (params: keyof typeof entities) => {
//   const dataSource = await connectionDB();
//   if (!dataSource) {
//     throw new Error('db not connected');
//   }
//   return dataSource.getRepository(entities[params]);
// };

export default AppDataSource;

// import type { DataSource } from 'typeorm';
import AppDataSource from './dataSource';
import ReviewEntity from './entities/ReviewEntity';

export { default as ReviewEntity } from './entities/ReviewEntity';
// let connectedDataSource: DataSource | null = null;

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

AppDataSource.initialize()
  .then(async () => {
    // eslint-disable-next-line no-console
    console.log('Connection initialized with database...');
  })
  // eslint-disable-next-line no-console
  .catch((error) => console.log(error));

// export const getDataSource = async (): Promise<DataSource> => {
//   if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (AppDataSource.isInitialized) resolve(AppDataSource);
//       else reject(new Error('Failed to create connection with database'));
//     }, 3000);
//   });
// };
// const review = AppDataSource.getRepository(ReviewEntity);

export default {
  review: AppDataSource.getRepository(ReviewEntity),
};

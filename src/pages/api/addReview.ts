import type { NextApiRequest, NextApiResponse } from 'next';
// import { getRepository } from '../../db';
// import { getDataSource } from '../../db';
import { ReviewEntity } from '../../db';
// import db from '../../db';
import AppDataSource from '../../db/dataSource';
// import ReviewEntity from '../../db/entities/ReviewEntity';

export default async function handler(
  req: NextApiRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: NextApiResponse<{ result: ReviewEntity | null }>,
) {
  try {
    // const AppDataSource = await getDataSource();
    // const dbReview = await getRepository('ReviewEntity');
    // if (!AppDataSource.isInitialized) {
    //   throw new Error('not connected');
    // }
    await AppDataSource.initialize();
    const repa = AppDataSource.getRepository(ReviewEntity);
    if (req.method !== 'POST') {
      throw new Error('incorrent request');
    }
    const { firstName, lastName, rating, notes, agree } = req.body;

    if (!firstName || !lastName || !rating || !notes || !agree) {
      throw new Error('not all values');
    }

    // const newReview = new ReviewEntity();
    // newReview.firstName = firstName;
    // newReview.lastName = lastName;
    // newReview.notes = notes;
    // newReview.rating = rating;
    // newReview.agree = agree;

    // const reviews = AppDataSource.getRepository(ReviewEntity);

    // const res = dbReview.find().then((ress) => console.log(ress));
    // console.log(res);

    const newReview = repa.create({
      firstName,
      lastName,
      notes,
      rating,
      agree,
    });
    // console.log(newReview);

    const result = await repa.save(newReview);
    // const ress = await dbReview.findOne({
    //   where: {
    //     id: result.id,
    //   },
    // });

    return res.json({ result });
  } catch (e) {
    return res.status(500).send({ result: null });
  }
}

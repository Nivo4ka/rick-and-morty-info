import type { NextApiRequest, NextApiResponse } from 'next';
import { getDataSource } from '../../db';
import ReviewEntity from '../../db/entities/ReviewEntity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewEntity>,
) {
  try {
    const AppDataSource = await getDataSource();
    const dbReview = AppDataSource.getRepository(ReviewEntity);
    if (!AppDataSource.isInitialized) {
      throw new Error('not connected');
    }
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

    console.log(dbReview.create({
      firstName,
      lastName,
      notes,
      rating,
      agree,
    }));
    const newReview = dbReview.create({
      firstName,
      lastName,
      notes,
      rating,
      agree,
    });
    console.log(newReview);

    const result = await dbReview.save(newReview);
    console.log('rgrg');
    return res.send(result);
  } catch (e) {
    return res.send(e.message);
  }
}

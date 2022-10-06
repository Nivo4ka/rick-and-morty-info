import type { NextApiRequest, NextApiResponse } from 'next';
import { getRepository } from '../../db/dataSource';
import { Review } from '../../db/entities/Review.entity';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review>,
) {
  try {
    if (req.method !== 'POST') {
      throw new Error('incorrent request');
    }
    const { name, lastname, rating, notes, agree } = req.body;

    if (!name || !lastname || !rating || !notes || !agree) {
      throw new Error('not all values');
    }

    const newReview = new Review();
    newReview.name = name;
    newReview.lastname = lastname;
    newReview.notes = notes;
    newReview.rating = rating;
    newReview.agree = agree;
    // const rewRep = await getRepository();
    // // rewRep = rewRep.getRepository(Review);
    // const result = await rewRep.getRepository(Review).save(newReview);

    const reviewRepository = await getRepository('Review');

    const result = await reviewRepository.save(newReview);
    return res.send(result);
  } catch (e) {
    return res.send(e.message);
  }
}

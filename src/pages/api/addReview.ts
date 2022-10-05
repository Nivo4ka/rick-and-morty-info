// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import { getConnection } from 'typeorm';
// import { getConnectionManager, getConnectionOptions } from 'typeorm';
import connection from '../../db/index';
import { Review } from '../../db/entities/Review';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review>,
) {
  const db = await connection();
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

  const result = await db.manager.save(newReview);
  return res.json(result);
}

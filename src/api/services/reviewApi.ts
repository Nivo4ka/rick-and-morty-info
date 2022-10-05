import type { Review } from '../../db/entities/Review';
import type { RequestReviewType } from '../../types/main.types';
import instance from '../myApi';

const addReview = (value: RequestReviewType) => {
  return instance.post<Review>('/addReview', value);
};

export default { addReview };

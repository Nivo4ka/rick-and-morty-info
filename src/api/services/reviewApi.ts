import type ReviewEntity from '../../db/entities/ReviewEntity';
import type { RequestReviewType } from '../../types/main.types';
import instance from '../myApi';

const addReview = (value: RequestReviewType) => {
  return instance.post<ReviewEntity>('/addReview', value);
};

export default { addReview };

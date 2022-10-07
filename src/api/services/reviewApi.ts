import type ReviewEntity from '../../db/entities/ReviewEntity';
import type { RequestReviewType } from '../../types/main.types';
import instance from '../myApi';

const addReview = (value: RequestReviewType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return instance.post<{ result: ReviewEntity }>('/addReview', value);
};

export default { addReview };

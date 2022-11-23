import { CommentInfo } from '../../types/models';
import { FC } from 'react';
import styles from './movie-reviews.module.css';
import CommentCard from '../comment-card';

interface MovieReviewsProps {
  comments: CommentInfo[];
}

export const MovieReviews: FC<MovieReviewsProps> = ({ comments }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsCol}>
        {comments.map((item, index) => {
          if (index % 2 === 0)
            return <CommentCard key={index} comment={item} />;
        })}
      </div>
      <div className={styles.reviewsCol}>
        {comments.map((item, index) => {
          if (index % 2 === 1)
            return <CommentCard key={index} comment={item} />;
        })}
      </div>
    </div>
  );
};

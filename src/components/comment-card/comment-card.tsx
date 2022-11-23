import dayjs from 'dayjs';
import { CommentInfo } from '../../types/models';
import { FC } from 'react';
import styles from './comment-card.module.css';

interface CommentCardProps {
  comment: CommentInfo;
}

export const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  const date = dayjs(comment.date);

  return (
    <div className={styles.review}>
      <blockquote className={styles.quote}>
        <p className={styles.text}>{comment.comment}</p>

        <footer className={styles.details}>
          <cite className={styles.author}>{comment.user.name}</cite>
          <time className={styles.date} dateTime={date.format('YYYY-MM-DD')}>
            {date.format('MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className={styles.rating}>{comment.rating}</div>
    </div>
  );
};

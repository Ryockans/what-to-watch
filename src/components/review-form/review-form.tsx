import styles from './review-form.module.css';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { postComment } from '../../store/slices/movie/actions';
import { useNavigate } from 'react-router-dom';

interface ReviewFormProps {
  id: number;
}

export const ReviewForm: FC<ReviewFormProps> = ({ id }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  interface RatingEventTarget extends EventTarget {
    value: number;
  }

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  const handleRatingChange: MouseEventHandler = (event) => {
    const target = event.target as RatingEventTarget;
    setRating(target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(postComment({ rating, comment: text, movieId: id })).then(() =>
      navigate(`/films/${id}/reviews`),
    );
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const canBePosted =
    text.length >= 50 && text.length <= 400 && rating !== null;

  return (
    <div className={styles.review}>
      <form action="#" onSubmit={submitHandler}>
        <div>
          <div className={styles.rating}>
            <input
              className={styles.input}
              id="star-10"
              type="radio"
              name="rating"
              value="10"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-10">
              Rating 10
            </label>

            <input
              className={styles.input}
              id="star-9"
              type="radio"
              name="rating"
              value="9"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-9">
              Rating 9
            </label>

            <input
              className={styles.input}
              id="star-8"
              type="radio"
              name="rating"
              value="8"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-8">
              Rating 8
            </label>

            <input
              className={styles.input}
              id="star-7"
              type="radio"
              name="rating"
              value="7"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-7">
              Rating 7
            </label>

            <input
              className={styles.input}
              id="star-6"
              type="radio"
              name="rating"
              value="6"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-6">
              Rating 6
            </label>

            <input
              className={styles.input}
              id="star-5"
              type="radio"
              name="rating"
              value="5"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-5">
              Rating 5
            </label>

            <input
              className={styles.input}
              id="star-4"
              type="radio"
              name="rating"
              value="4"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-4">
              Rating 4
            </label>

            <input
              className={styles.input}
              id="star-3"
              type="radio"
              name="rating"
              value="3"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-3">
              Rating 3
            </label>

            <input
              className={styles.input}
              id="star-2"
              type="radio"
              name="rating"
              value="2"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-2">
              Rating 2
            </label>

            <input
              className={styles.input}
              id="star-1"
              type="radio"
              name="rating"
              value="1"
              onClick={handleRatingChange}
            />
            <label className={styles.label} htmlFor="star-1">
              Rating 1
            </label>
          </div>
        </div>

        <div className={styles.text}>
          <textarea
            className={styles.textarea}
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <div className={styles.submit}>
            <button
              className={styles.button}
              type="submit"
              disabled={!canBePosted}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

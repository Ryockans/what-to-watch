import { AddIcon, InListIcon, PlayIcon } from '../svg-icons';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './movie-description.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/slices/movie/actions';
import { AppDispatch } from '../../store/store';
import { userSelector } from '../../store/slices/auth/selectors';

interface MovieDescriptionProps {
  id: number;
  name: string;
  genre: string;
  released: number;
  isFavorite?: boolean;
  addReview?: boolean;
}

export const MovieDescription: FC<MovieDescriptionProps> = (props) => {
  const userData = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (userData === null) {
      navigate('/login');
    }
    const nextStatus = props.isFavorite ? 0 : 1;
    dispatch(toggleFavorite({ movieId: props.id, status: nextStatus }));
  };

  const handleReviewClick = () => {
    navigate('review');
  };

  return (
    <div className={styles.description}>
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.meta}>
        <span className={styles.genre}>{props.genre}</span>
        <span>{props.released}</span>
      </p>

      <div className={styles.buttons}>
        <button
          className={classNames(styles.button, styles.Play)}
          type="button"
        >
          <PlayIcon />
          <span>Play</span>
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={handleFavoriteClick}
        >
          {!props.isFavorite && <AddIcon />}
          {props.isFavorite && <InListIcon />}
          <span>My list</span>
        </button>
        {props.addReview && (
          <button
            onClick={handleReviewClick}
            type="button"
            className={styles.button}
          >
            Add review
          </button>
        )}
      </div>
    </div>
  );
};

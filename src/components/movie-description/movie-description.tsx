import { AddIcon, PlayIcon } from '../svg-icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './movie-description.module.css';

interface MovieDescriptionProps {
  name: string;
  genre: string;
  released: number;
  addReview?: boolean;
}

export const MovieDescription: FC<MovieDescriptionProps> = (props) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.meta}>
        <span className={styles.genre}>{props.genre}</span>
        <span>{props.released}</span>
      </p>

      <div className={styles.buttons}>
        <button className={styles.button} type="button">
          <PlayIcon />
          <span>Play</span>
        </button>
        <button className={styles.button} type="button">
          <AddIcon />
          <span>My list</span>
        </button>
        {props.addReview && (
          <Link to="/review" className={styles.button}>
            Add review
          </Link>
        )}
      </div>
    </div>
  );
};

import styles from './movie-details.module.css';
import { MovieInfo } from '../../types/models';
import { FC } from 'react';

interface MovieDetailsProps {
  movieInfo: MovieInfo;
}

export const MovieDetails: FC<MovieDetailsProps> = ({ movieInfo }) => {
  const addStarring = () => {
    return movieInfo.starring.map((item, index) => {
      const text = index !== movieInfo.starring.length - 1 ? item + ',' : item;
      return <li key={index}>{text}</li>;
    });
  };

  const hours = Math.floor(movieInfo.run_time / 60) + 'h';
  const minutes = (movieInfo.run_time % 60) + 'm';
  const runTime = `${hours} ${minutes}`;

  return (
    <div className={styles.text}>
      <div className={styles.textCol}>
        <p className={styles.item}>
          <strong className={styles.name}>Director</strong>
          <span className={styles.value}>{movieInfo.director}</span>
        </p>
        <div className={styles.item}>
          <strong className={styles.name}>Starring</strong>
          <ul className={styles.value}>{addStarring()}</ul>
        </div>
      </div>

      <div className="film-card__text-col">
        <p className={styles.item}>
          <strong className={styles.name}>Run Time</strong>
          <span className={styles.value}>{runTime}</span>
        </p>
        <p className={styles.item}>
          <strong className={styles.name}>Genre</strong>
          <span className={styles.value}>{movieInfo.genre}</span>
        </p>
        <p className={styles.item}>
          <strong className={styles.name}>Released</strong>
          <span className={styles.value}>{movieInfo.released}</span>
        </p>
      </div>
    </div>
  );
};

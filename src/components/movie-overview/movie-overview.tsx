import { FC, Fragment } from 'react';
import styles from './movie-overview.module.css';
import { MovieInfo } from '../../types/models';

interface MovieOverviewProps {
  movieInfo: MovieInfo;
}

export const MovieOverview: FC<MovieOverviewProps> = ({ movieInfo }) => {
  const ratingToLevel = (rating) => {
    if (rating > 0 && rating <= 3) return 'Bad';
    if (rating > 3 && rating <= 5) return 'Normal';
    if (rating > 5 && rating <= 8) return 'Very good';
    if (rating > 8 && rating <= 10) return 'Awesome';
  };

  return (
    <Fragment>
      <div className={styles.rating}>
        <div className={styles.ratingScore}>{movieInfo.rating}</div>
        <p className={styles.ratingMeta}>
          <span className={styles.ratingLevel}>
            {ratingToLevel(movieInfo.rating)}
          </span>
          <span className={styles.ratingCount}>
            {movieInfo.scores_count} ratings
          </span>
        </p>
      </div>

      <div className={styles.text}>
        <p>{movieInfo.description}</p>

        <p className={styles.director}>
          <strong>Director: {movieInfo.director}</strong>
        </p>

        <p className={styles.starring}>
          <strong>Starring: {movieInfo.starring.join(', ')} and other</strong>
        </p>
      </div>
    </Fragment>
  );
};

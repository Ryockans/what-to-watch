import { FC } from 'react';
import styles from './movie-poster.module.css';
import classNames from 'classnames';

interface MoviePosterProps {
  size?: 'big' | 'medium' | 'small';
  name: string;
  src: string;
}

export const MoviePoster: FC<MoviePosterProps> = ({
  name,
  src,
  size = 'medium',
}) => {
  let posterClass;

  switch (size) {
    case 'big':
      posterClass = classNames(styles.poster, styles.Big);
      break;

    case 'medium':
      posterClass = styles.poster;
      break;

    case 'small':
      posterClass = classNames(styles.poster, styles.Small);
      break;
  }

  return (
    <div className={posterClass}>
      <img src={src} alt={name} width="218" height="327" />
    </div>
  );
};

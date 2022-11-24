import { FC, ReactElement } from 'react';
import Background from '../background';
import Header from '../header';
import MoviePoster from '../movie-poster';
import styles from './add-review-wrapper.module.css';
import { MovieInfo } from '../../types/models';

interface AddReviewWrapperProps {
  movie: MovieInfo;
  children: ReactElement | ReactElement[];
}

export const AddReviewWrapper: FC<AddReviewWrapperProps> = ({
  children,
  movie,
}) => {
  return (
    <section
      className={styles.wrap}
      style={{ background: movie.background_color }}
    >
      <div className={styles.header}>
        <Background name={movie.name} src={movie.background_image} />

        <Header breadcrumbs />

        <MoviePoster name={movie.name} src={movie.poster_image} size="small" />
      </div>

      {children}
    </section>
  );
};

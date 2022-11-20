import { MovieInfo } from '../../types/models';
import MovieListItem from '../movie-list-item';
import { FC } from 'react';
import styles from './movie-list.module.css';

interface MovieListProps {
  movieList: MovieInfo[];
}

export const MovieList: FC<MovieListProps> = ({ movieList }) => {
  return (
    <section className={styles.catalog}>
      <div className={styles.list}>
        {movieList.map((item) => {
          return (
            <MovieListItem
              key={item.id}
              id={item.id}
              name={item.name}
              previewImage={item.preview_image}
              previewVideoLink={item.preview_video_link}
            />
          );
        })}
      </div>
    </section>
  );
};

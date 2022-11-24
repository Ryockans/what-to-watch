import React, { FC } from 'react';
import Header from '../header';
import MovieDescription from '../movie-description';
import Background from '../background';
import styles from './promo.module.css';
import { MovieInfo } from '../../types/models';
import MoviePoster from '../movie-poster';

interface PromoProps {
  movie: MovieInfo;
}

export const Promo: FC<PromoProps> = ({ movie }) => {
  return (
    <section
      className={styles.promo}
      style={{ background: movie.background_color }}
    >
      <Background name={movie.name} src={movie.background_image} />
      <Header />

      <div className={styles.wrap}>
        <div className={styles.info}>
          <MoviePoster name={movie.name} src={movie.poster_image} />
          <MovieDescription
            id={movie.id}
            name={movie.name}
            genre={movie.genre}
            released={movie.released}
            isFavorite={movie.is_favorite}
          />
        </div>
      </div>
    </section>
  );
};

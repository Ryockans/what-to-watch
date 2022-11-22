import React, { FC } from 'react';
import Header from '../header';
import MovieDescription from '../movie-description';
import Background from '../background';
import styles from './promo.module.css';
import { MovieInfo } from '../../types/models';

interface PromoProps {
  movie: MovieInfo;
}

export const Promo: FC<PromoProps> = ({ movie }) => {
  return (
    <section className={styles.promo}>
      <Background name={movie.name} src={movie.background_image} />
      <Header />

      <div className={styles.wrap}>
        <div className={styles.info}>
          <div className={styles.poster}>
            <img
              src={movie.poster_image}
              alt={movie.name}
              width="218"
              height="327"
            />
          </div>
          <MovieDescription
            name={movie.name}
            genre={movie.genre}
            released={movie.released}
          />
        </div>
      </div>
    </section>
  );
};

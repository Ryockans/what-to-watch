import Header from '../header';
import Background from '../background';
import MovieDescription from '../movie-description';
import { Route, Routes } from 'react-router-dom';
import MovieOverview from '../movie-overview';
import MovieDetails from '../movie-details';
import MovieReviews from '../movie-reviews';
import styles from './movie-full-card.module.css';
import classNames from 'classnames';
import MovieCardNavigation from '../movie-card-navigation';
import { CommentInfo, MovieInfo } from '../../types/models';
import { FC } from 'react';
import MoviePoster from '../movie-poster';

interface MovieFullCardProps {
  movieInfo: MovieInfo;
  comments: CommentInfo[];
}

export const MovieFullCard: FC<MovieFullCardProps> = ({
  movieInfo,
  comments,
}) => {
  return (
    <section
      className={styles.movieCard}
      style={{ background: movieInfo.background_color }}
    >
      <div className={styles.movieCardHero}>
        <Background name={movieInfo.name} src={movieInfo.background_image} />

        <Header />

        <div className={styles.wrap}>
          <MovieDescription
            id={movieInfo.id}
            name={movieInfo.name}
            genre={movieInfo.genre}
            released={movieInfo.released}
            isFavorite={movieInfo.is_favorite}
            addReview
          />
        </div>
      </div>

      <div className={classNames(styles.wrap, styles.TranslateTop)}>
        <div className={styles.info}>
          <MoviePoster
            name={movieInfo.name}
            src={movieInfo.poster_image}
            size="big"
          />

          <div className={styles.description}>
            <MovieCardNavigation id={movieInfo.id} />
            <Routes>
              <Route
                path="/"
                element={<MovieOverview movieInfo={movieInfo} />}
              />
              <Route
                path="/details"
                element={<MovieDetails movieInfo={movieInfo} />}
              />
              <Route
                path="/reviews"
                element={<MovieReviews comments={comments} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

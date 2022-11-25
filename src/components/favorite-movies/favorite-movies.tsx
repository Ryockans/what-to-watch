import MovieList from '../movie-list';
import { useSelector } from 'react-redux';
import { movieListSelector } from '../../store/slices/movie-list/selectors';
import styles from './favorite-movies.module.css';

export const FavoriteMovies = () => {
  const { movies } = useSelector(movieListSelector);
  return (
    <section className={styles.catalog}>
      {movies && <MovieList movieList={movies} />}
    </section>
  );
};

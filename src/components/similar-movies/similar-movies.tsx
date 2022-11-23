import styles from './similar-movies.module.css';
import { useSelector } from 'react-redux';
import { movieListSelector } from '../../store/slices/movie-list/selectors';
import MovieList from '../movie-list';

export const SimilarMovies = () => {
  const { movies } = useSelector(movieListSelector);
  return (
    <section className={styles.similar}>
      <h2 className={styles.title}>More like this</h2>
      <MovieList movieList={movies} />
    </section>
  );
};

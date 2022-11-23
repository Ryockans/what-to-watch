import styles from './similar-movies.module.css';
import { useSelector } from 'react-redux';
import { movieListSelector } from '../../store/slices/movie-list/selectors';
import MovieList from '../movie-list';
import { movieSelector } from '../../store/slices/movie/selectors';

export const SimilarMovies = () => {
  const { movieInfo: currentMovie } = useSelector(movieSelector);
  const { movies } = useSelector(movieListSelector);

  const similarMovies = movies.filter((movie) => movie.id !== currentMovie.id);

  return (
    <section className={styles.similar}>
      <h2 className={styles.title}>More like this</h2>
      <MovieList movieList={similarMovies} />
    </section>
  );
};

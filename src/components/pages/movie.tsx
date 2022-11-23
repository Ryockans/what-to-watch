import MovieFullCard from '../movie-full-card';
import { Fragment, useEffect } from 'react';
import PageContent from '../page-content';
import Footer from '../footer';
import { getComments, getMovie } from '../../store/slices/movie/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { movieSelector } from '../../store/slices/movie/selectors';
import SimilarMovies from '../similar-movies';
import { getSimilar } from '../../store/slices/movie-list/actions';
import { useLocation } from 'react-router-dom';

export const MoviePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieInfo, comments } = useSelector(movieSelector);
  const location = useLocation();
  const id = +location.pathname.match(/\d+/g)[0];

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getComments(id));
    dispatch(getSimilar(id));
  }, [id]);

  return (
    <Fragment>
      {movieInfo && <MovieFullCard movieInfo={movieInfo} comments={comments} />}
      <PageContent>
        <SimilarMovies />
        <Footer />
      </PageContent>
    </Fragment>
  );
};

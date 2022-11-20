import React, { Fragment, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PrivatePage from '../pages/private';
import PublicPage from '../pages/public';
import { api, AppDispatch } from '../../store/store';
import { getUser, signIn, signOut } from '../../store/slices/auth/actions';
import Header from '../header/';
import Footer from '../footer';
import { movieListSelector } from '../../store/slices/movie-list/selectors';
import { getAllMovies } from '../../store/slices/movie-list/actions';
import MovieList from '../movie-list';
import styles from './app.module.css';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const movies = useSelector(movieListSelector);

  useEffect(() => {
    if (api.hasToken()) dispatch(getUser());
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />

      <div className={styles.content}>
        <Link to="/public">Public Page</Link>
        <Link to="/private">Private Page</Link>
        <button
          type="button"
          onClick={() => {
            dispatch(
              signIn({
                email: 'Oliver.conner@gmail.com',
                password: '12345678',
              }),
            );
          }}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(signOut());
          }}
        >
          Sign Out
        </button>

        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="/private" element={<PrivatePage />} />
          <Route path="/" />
        </Routes>
        <MovieList movieList={movies} />
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;

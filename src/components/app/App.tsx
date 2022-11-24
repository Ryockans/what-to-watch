import React, { Fragment, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivatePage from '../pages/private';
import PublicPage from '../pages/public';
import { api, AppDispatch } from '../../store/store';
import { getUser, signIn, signOut } from '../../store/slices/auth/actions';
import { MainPage } from '../pages/main';
import { MoviePage } from '../pages/movie';
import { AddReviewPage } from '../pages/add-review';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (api.hasToken()) dispatch(getUser());
  }, [dispatch]);

  return (
    <Fragment>
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
        <Route path="/" element={<MainPage />} />
        <Route path="/films/:id/*" element={<MoviePage />} />
        <Route path="/films/:id/review" element={<AddReviewPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

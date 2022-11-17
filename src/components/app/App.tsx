import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivatePage from '../pages/private';
import PublicPage from '../pages/public';
import { AppDispatch } from '../../store/store';
import { getUser, signIn, signOut } from '../../store/slices/auth/actions';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/public">Public Page</Link>
      <Link to="/private">Private Page</Link>
      <button
        type="button"
        onClick={() => {
          dispatch(
            signIn({ email: 'Oliver.conner@gmail.com', password: '12345678' }),
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
      </Routes>
    </div>
  );
}

export default App;

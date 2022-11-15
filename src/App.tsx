import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import WtwapiService from './services/wtwapi';
import PrivatePage from './components/pages/private';
import PublicPage from './components/pages/public';
import {
  signError,
  signInSuccess,
  signOutSuccess,
  signRequired,
} from './slices/sign-slice';

const api = new WtwapiService();

function App() {
  const token = useSelector((state: RootState) => state.sign.token);
  const dispatch = useDispatch();
  const buttonText = token === null ? 'Sign in' : 'Sign out';

  const signIn = () => {
    if (token === null) {
      dispatch(signRequired());
      api
        .signIn('Oliver.conner@gmail.com', '12345678')
        .then((data) => {
          dispatch(signInSuccess(data.token));
        })
        .catch((error) => dispatch(signError(error)));
    } else {
      dispatch(signRequired());
      api
        .signOut(token)
        .then(() => {
          dispatch(signOutSuccess());
        })
        .catch((error) => dispatch(signError(error)));
    }
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <Link to="/public">Public Page</Link>
      <Link to="/private">Private Page</Link>
      <button onClick={signIn} type="button">
        {buttonText}
      </button>
      <Routes>
        <Route path="/public" element={<PublicPage />} />
        <Route path="/private" element={<PrivatePage />} />
      </Routes>
    </div>
  );
}

export default App;

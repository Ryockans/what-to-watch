import Footer from '../footer';
import Header from '../header';
import UserPageWrapper from '../user-page-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../../store/slices/auth/selectors';
import { getFavorite } from '../../store/slices/movie-list/actions';
import { AppDispatch } from '../../store/store';
import FavoriteMovies from '../favorite-movies';

export const MyListPage = () => {
  const userInfo = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo === null) {
      navigate('/login');
      return;
    }
    dispatch(getFavorite());
  }, [userInfo]);

  return (
    <UserPageWrapper>
      <Header wide>My List</Header>

      <FavoriteMovies />

      <Footer />
    </UserPageWrapper>
  );
};

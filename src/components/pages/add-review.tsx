import { AddReviewWrapper } from '../add-review-wrapper/add-review-wrapper';
import ReviewForm from '../review-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../store/slices/movie/actions';
import { AppDispatch } from '../../store/store';
import { movieSelector } from '../../store/slices/movie/selectors';
import { userSelector } from '../../store/slices/auth/selectors';

export const AddReviewPage = () => {
  const userInfo = useSelector(userSelector);
  const { movieInfo } = useSelector(movieSelector);
  const id = +useLocation().pathname.match(/\d+/);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      dispatch(getMovie(id));
    } else {
      navigate('/login');
    }
  }, [id]);

  return (
    movieInfo && (
      <AddReviewWrapper movie={movieInfo}>
        <ReviewForm id={movieInfo.id} />
      </AddReviewWrapper>
    )
  );
};

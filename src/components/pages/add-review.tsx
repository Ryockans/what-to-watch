import { AddReviewWrapper } from '../add-review-wrapper/add-review-wrapper';
import ReviewForm from '../review-form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../store/slices/movie/actions';
import { AppDispatch } from '../../store/store';
import { movieSelector } from '../../store/slices/movie/selectors';

export const AddReviewPage = () => {
  const { movieInfo } = useSelector(movieSelector);
  const id = +useLocation().pathname.match(/\d+/);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  return (
    movieInfo && (
      <AddReviewWrapper movie={movieInfo}>
        <ReviewForm id={movieInfo.id} />
      </AddReviewWrapper>
    )
  );
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMovie, setComments } from './movie-slice';
import { api } from '../../store';

interface IPostCommentPayload {
  movieId: number;
  rating: number;
  comment: string;
}

export const getMovie = createAsyncThunk(
  'movie/getMovie',
  async (movieId: number, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getMovie(movieId);
      dispatch(setMovie(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const getPromo = createAsyncThunk(
  'movie/getPromo',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getPromo();
      dispatch(setMovie(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const getComments = createAsyncThunk(
  'movie/getComments',
  async (movieId: number, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getComments(movieId);
      dispatch(setComments(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const postComment = createAsyncThunk(
  'movie/postComment',
  async (
    { movieId, rating, comment }: IPostCommentPayload,
    { rejectWithValue, dispatch },
  ) => {
    try {
      await api.postComment(movieId, rating, comment);
      const res = await api.getComments(movieId);
      dispatch(setComments(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const addFavorite = createAsyncThunk(
  'movie/addFavorite',
  async (movieId: number, { rejectWithValue, dispatch }) => {
    try {
      await api.toggleFavorite(movieId, '1');
      const res = await api.getMovie(movieId);
      dispatch(setMovie(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

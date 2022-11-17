import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from './movie-list-slice';
import { api } from '../../store';

export const getAllMovies = createAsyncThunk(
  'movie-list/getAllMovies',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getAllMovies();
      dispatch(getMovies(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const getFavorite = createAsyncThunk(
  'movie-list/getFavorite',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getFavorite();
      dispatch(getMovies(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const getSimilar = createAsyncThunk(
  'movie-list/getSimilar',
  async (payload: number, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getSimilarMovies(payload);
      dispatch(getMovies(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

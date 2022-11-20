import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieInfo } from '../../../types/models';
import AsyncState from '../../../types/asyncState';
import buildAsyncReducers from '../../../utils/buildAsyncReducer';
import { getAllMovies, getFavorite, getSimilar } from './actions';

interface MovieListState extends AsyncState {
  movies: MovieInfo[];
}

const initialState: MovieListState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieListSlice = createSlice({
  name: 'movie-list',
  initialState,
  reducers: {
    getMovies: (state: MovieListState, action: PayloadAction<MovieInfo[]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    buildAsyncReducers(builder, getAllMovies, getFavorite, getSimilar);
  },
});

export const { getMovies } = movieListSlice.actions;

export default movieListSlice.reducer;

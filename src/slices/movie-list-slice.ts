import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieInfo } from '../types/movieInfo';

interface MovieListState {
  movies: MovieInfo[];
  loading: boolean;
  error: Error | null;
}

const initialState: MovieListState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieListSlice = createSlice({
  name: 'film list',
  initialState,
  reducers: {
    moviesRequired: (state) => {
      state.movies = [];
      state.error = null;
      state.loading = true;
    },
    moviesLoaded: (state, action: PayloadAction<MovieInfo[]>) => {
      state.movies = [...action.payload];
      state.error = null;
      state.loading = false;
    },
    moviesError: (state, action: PayloadAction<Error>) => {
      state.movies = [];
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { moviesRequired, moviesLoaded, moviesError } =
  movieListSlice.actions;

export default movieListSlice.reducer;

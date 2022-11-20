import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './slices/auth/auth-slice';
import moviesListReducer from './slices/movie-list/movie-list-slice';
import movieReducer from './slices/movie/movie-slice';
import pageReducer from './slices/page/slice';
import WtwapiService from '../services/api/wtwapi';

export const api = new WtwapiService();

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    movieList: moviesListReducer,
    movie: movieReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

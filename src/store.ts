import { configureStore } from '@reduxjs/toolkit';
import signInReducer from './slices/sign-slice';
import moviesListReducer from './slices/movie-list-slice';

const store = configureStore({
  reducer: {
    sign: signInReducer,
    moviesList: moviesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

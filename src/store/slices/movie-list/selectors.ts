import { RootState } from '../../store';

export const movieListSelector = (state: RootState) => state.movieList.movies;

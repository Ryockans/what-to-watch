import { RootState } from '../../store';

export const movieSelector = (state: RootState) => state.movie.movieInfo;
export const commentsSelector = (state: RootState) => state.movie.comments;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentInfo, MovieInfo } from '../../../types/models';
import AsyncState from '../../../types/asyncState';
import buildAsyncReducer from '../../utils/buildAsyncReducer';
import { getComments, getMovie, getPromo, postComment } from './actions';

export interface MovieState extends AsyncState {
  movieInfo: MovieInfo | null;
  comments: CommentInfo[];
}

const initialState: MovieState = {
  movieInfo: null,
  comments: [],
  loading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state: MovieState, action: PayloadAction<MovieInfo>) => {
      state.movieInfo = action.payload;
    },
    setComments: (state: MovieState, action: PayloadAction<CommentInfo[]>) => {
      state.comments = action.payload;
    },
  },
  extraReducers: (builder) => {
    buildAsyncReducer(getMovie, builder);
    buildAsyncReducer(getComments, builder);
    buildAsyncReducer(postComment, builder);
    buildAsyncReducer(getPromo, builder);
  },
});

export const { setMovie, setComments } = movieSlice.actions;

export default movieSlice.reducer;

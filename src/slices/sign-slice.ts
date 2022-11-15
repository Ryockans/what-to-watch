import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncState from '../types/asyncState';
import UserInfo from '../types/userInfo';

export interface SignState extends AsyncState {
  userInfo: UserInfo | null;
}

const initialState: SignState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    signRequired: (state) => {
      state.userInfo = null;
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      state.error = null;
      state.loading = false;
    },
    signOutSuccess: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    },
    signError: (state, action: PayloadAction<Error>) => {
      state.userInfo = null;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signRequired, signInSuccess, signOutSuccess, signError } =
  signSlice.actions;

export default signSlice.reducer;

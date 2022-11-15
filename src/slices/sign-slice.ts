import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SignState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: SignState = {
  token: null,
  loading: false,
  error: null,
};

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    signRequired: (state) => {
      state.token = null;
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    },
    signOutSuccess: (state) => {
      state.token = null;
      state.loading = false;
      state.error = null;
    },
    signError: (state, action: PayloadAction<Error>) => {
      state.token = null;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signRequired, signInSuccess, signOutSuccess, signError } =
  signSlice.actions;

export default signSlice.reducer;

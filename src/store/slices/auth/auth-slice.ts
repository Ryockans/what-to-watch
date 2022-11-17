import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../../types/models';
import AsyncState from '../../../types/asyncState';
import { getUser, signIn, signOut } from './actions';
import buildAsyncReducer from '../../utils/buildAsyncReducer';

export interface AuthState extends AsyncState {
  userInfo: UserInfo | null;
}

const initialState: AuthState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    logOut: (state: AuthState) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    buildAsyncReducer(signIn, builder);
    buildAsyncReducer(signOut, builder);
    buildAsyncReducer(getUser, builder);
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

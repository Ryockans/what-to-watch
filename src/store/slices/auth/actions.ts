import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut } from './auth-slice';
import { api } from '../../store';

interface ISignInPayload {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload: ISignInPayload, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.signIn(payload.email, payload.password);
      dispatch(logIn(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.getUser();
      dispatch(logIn(res));
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await api.signOut();
      dispatch(logOut());
    } catch (err) {
      throw rejectWithValue(err);
    }
  },
);

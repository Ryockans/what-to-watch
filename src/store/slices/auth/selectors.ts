import { RootState } from '../../store';

export const userSelector = (state: RootState) => state.auth.userInfo;
export const userErrorSelector = (state: RootState) => state.auth.error;

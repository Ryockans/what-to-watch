import { RootState } from '../../store';

export const userSelector = (state: RootState) => state.auth.userInfo;
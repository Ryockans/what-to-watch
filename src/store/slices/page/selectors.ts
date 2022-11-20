import { RootState } from '../../store';

export const pageSelector = (state: RootState) => state.page.currentPage;

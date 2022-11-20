import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Page = 'main' | 'movie' | 'add-review' | 'sign-in' | 'my-list' | 'player';

interface PageState {
  currentPage: Page;
}

const initialState: PageState = {
  currentPage: 'main',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state: PageState, action: PayloadAction<Page>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;

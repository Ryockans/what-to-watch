import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import AsyncState from '../../types/asyncState';

export default function buildAsyncReducer(
  asyncThunk,
  builder: ActionReducerMapBuilder<WritableDraft<AsyncState>>,
) {
  builder.addCase(asyncThunk.pending, (state) => {
    state.loading = true;
    state.error = null;
  });
  builder.addCase(asyncThunk.fulfilled, (state) => {
    state.loading = false;
    state.error = null;
  });
  builder.addCase(asyncThunk.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as Error;
  });
}

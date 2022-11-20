import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import AsyncState from '../types/asyncState';

function buildAsyncReducer(
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

export default function buildAsyncReducers(
  builder: ActionReducerMapBuilder<WritableDraft<AsyncState>>,
  ...asyncThunks
) {
  for (let thunk of asyncThunks) {
    buildAsyncReducer(thunk, builder);
  }
}

import { createSlice } from '@reduxjs/toolkit';
import { KyThiState } from './types';
import { onThunkGetAllKyThi } from './thunk';

const initialState: KyThiState = {
  listKyThi: [],
};

const kyThiSlice = createSlice({
  name: 'kythi',
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Get data all giang vien
      .addCase(onThunkGetAllKyThi.fulfilled, (state, action) => {
        state.listKyThi = action.payload;
      });

    // Get data ngay thi 2
  },
});

export const kyThiReducer = kyThiSlice.reducer;
export const kyThiAction = kyThiSlice.actions;
export default kyThiSlice;

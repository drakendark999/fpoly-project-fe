import { createSlice } from '@reduxjs/toolkit';
import { TimeAllowState } from './types';
import { onThunkGetAllTimeAllow } from './thunk';

const initialState: TimeAllowState = {
  listTimeAllow: [],
};

const timeAllowSlice = createSlice({
  name: 'kythi',
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Get data all giang vien
      .addCase(onThunkGetAllTimeAllow.fulfilled, (state, action) => {
        state.listTimeAllow = action.payload;
      });

    // Get data ngay thi 2
  },
});

export const timeAllowReducer = timeAllowSlice.reducer;
export const timeAllowAction = timeAllowSlice.actions;
export default timeAllowSlice;

import { createSlice } from '@reduxjs/toolkit';
import { BoMonState } from './types';
import { onThunkGetAllBoMon } from './thunk';

const initialState: BoMonState = {
  listBoMon: [],
};

const boMonSlice = createSlice({
  name: 'bomon',
  initialState: initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      // Get data all giang vien
      .addCase(onThunkGetAllBoMon.fulfilled, (state, action) => {
        state.listBoMon = action.payload;
      });

    // Get data ngay thi 2
  },
});

export const boMonReducer = boMonSlice.reducer;
export const boMonAction = boMonSlice.actions;
export default boMonSlice;

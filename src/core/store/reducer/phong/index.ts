import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { phongState } from './types';
import { onThunkGetAllPhong } from './thunk';
import { ToaNhaEmum } from '@src/core/libs/constants';

const initialState: phongState = {
  phongList: [],
  filter_phong: {
    toa_nha: ToaNhaEmum.toa_F,
  },
};

const phongSlice = createSlice({
  name: 'phong',
  initialState: initialState,

  reducers: {
    addToaNhaToFilterPhong: (state, action: PayloadAction<number>) => {
      state.filter_phong.toa_nha = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // Get data all phong
      .addCase(onThunkGetAllPhong.fulfilled, (state, action) => {
        state.phongList = action.payload;
      });

    // Get data ngay thi 2
  },
});

export const phongReduce = phongSlice.reducer;
export const phongAction = phongSlice.actions;
export default phongSlice;

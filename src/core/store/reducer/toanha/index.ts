import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToaNhaState } from './types';
import { onThunkGetAllToaNha } from './thunk';

const initialState: ToaNhaState = {
  listToaNha: [],
  filter_toaNha: '1',
};

const toaNhaSlice = createSlice({
  name: 'toanha',
  initialState: initialState,

  reducers: {
    setValueToFilterToaNha: (state, action: PayloadAction<string>) => {
      state.filter_toaNha = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // Get data all phong
      .addCase(onThunkGetAllToaNha.fulfilled, (state, action) => {
        state.listToaNha = action.payload;
      });

    // Get data ngay thi 2
  },
});

export const toaNhaReducer = toaNhaSlice.reducer;
export const toaNhaAction = toaNhaSlice.actions;
export default toaNhaSlice;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { giangVienState } from './types';
import { onThunkGetAllDataGiangVien, onThunkPutSttGiangVien } from './thunk';
import { KindOfGvEnum } from '@src/core/libs/constants';

const initialState: giangVienState = {
  allGiangVien: [],
  filter: '',
  filterDT: [
    KindOfGvEnum.CanBoNhanVienVT,
    KindOfGvEnum.CoHuuVT,
    KindOfGvEnum.ThinhGiangVT,
    KindOfGvEnum.CanBoQuanLyVT,
  ],
};

const giangVienSlice = createSlice({
  name: 'giangvien',
  initialState: initialState,

  reducers: {
    setFIter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },

    addDtToFilterDT: (state, action: PayloadAction<string>) => {
      state.filterDT = [...state.filterDT, action.payload];
    },

    increaseCount: (state, action: PayloadAction<string>) => {
      const find = state.allGiangVien.find((e) => e.MaNV === action.payload);

      if (find) {
        find.count =
          find.count === 0 || find.count ? find.count + 1 : find.count;
      }
    },

    decreaseCount: (state, action: PayloadAction<string>) => {
      const find = state.allGiangVien.find((e) => e.MaNV == action.payload);
      if (find) {
        find.count =
          find.count === 0 || find.count ? find.count + -1 : find.count;
      }
    },

    deleteDTFromFilterDT: (state, action: PayloadAction<string>) => {
      state.filterDT = state.filterDT.filter((e) => e !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      // Get data all giang vien
      .addCase(onThunkGetAllDataGiangVien.fulfilled, (state, action) => {
        state.allGiangVien = action.payload;
      })

      .addCase(onThunkPutSttGiangVien.fulfilled, () => {
        alert('Cập nhật thành công');
      });
  },
});

export const giangVienReducer = giangVienSlice.reducer;
export const giangVienAction = giangVienSlice.actions;
export default giangVienSlice;

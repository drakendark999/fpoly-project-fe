import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@src/core/store/store';

export const getSelectorAllPhong = (state: AppState) => state.phong.phongList;
export const getSelectorFIlterToaNha_Phong = (state: AppState) =>
  state.phong.filter_phong.toa_nha;

export const getDataPhongHandleFilter = createSelector(
  getSelectorAllPhong,
  getSelectorFIlterToaNha_Phong,
  (data_phong, filter_phong_base_toaNha) => {
    return data_phong.filter((item) => {
      return item.idToaNha === filter_phong_base_toaNha;
    });
  },
);

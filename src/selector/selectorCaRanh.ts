import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@src/core/store/store';

export const getSelectorAllCaRanh = (state: AppState) =>
  state.caranh.all_ca_ranh;

export const getSelectorFilterDate_CaRanh = (state: AppState) =>
  state.caranh.filter_caranh.date;

export const getSelectorCaRanhGv = (state: AppState) => state.caranh.ca_ranh_gv;

export const getDataCaRanhHandleFIlter = createSelector(
  getSelectorAllCaRanh,
  getSelectorFilterDate_CaRanh,
  (data, filterDate) => {
    return data.filter((e) => e.ngay_Thi?.includes(filterDate));
  },
);

import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@src/core/store/store';

export const getSelectorAllGiangVien = (state: AppState) =>
  state.giangvien.allGiangVien;
export const getSelectorFilterofGiangVien = (state: AppState) =>
  state.giangvien.filter;
export const getSelectorFilterDTofGiangVien = (state: AppState) =>
  state.giangvien.filterDT;

export const getAllGiangVienFiter = createSelector(
  getSelectorAllGiangVien,
  getSelectorFilterofGiangVien,
  getSelectorFilterDTofGiangVien,
  (list, filterValue, filterDT) => {
    return list?.filter((e) => {
      if (filterValue) {
        return (
          e.khongPhanGV2 != 1 &&
          e.BoMon === filterValue &&
          filterDT.includes(e.doiTuong)
        );
      } else {
        return e.khongPhanGV2 != 1 && filterDT.includes(e.doiTuong);
      }
    });
  },
);

export const getAllGiangVienFilter_BaseBM = createSelector(
  getSelectorAllGiangVien,
  getSelectorFilterofGiangVien,
  (list, filterValue) => {
    return list.filter((e) => {
      if (filterValue) {
        return e.khongPhanGV2 != 1 && e.BoMon === filterValue;
      } else {
        return e.khongPhanGV2 != 1;
      }
    });
  },
);

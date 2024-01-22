import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '@src/core/store/store';

// Get All Dat from Lich Thi

export const getSelectorAllLichThi2 = (state: AppState) =>
  state.lichthi2.allLichThi2;

export const getSelectorAllLichThi2Cancel = (state: AppState) =>
  state.lichthi2.allLichThi2Cancel;

export const getSelectorAllLichThi2Busy = (state: AppState) =>
  state.lichthi2.allLichThi2Busy;

export const getSelectorAllNgayThi = (state: AppState) =>
  state.lichthi2.allNgayThi;

export const getSelectorAllDotThi = (state: AppState) =>
  state.lichthi2.allDotThi;

// Get filter Lich Thi 2
export const getSelectorFIlterBlock_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.block;

export const getSelectorFilterBoMon_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.bo_mon;

export const getSelectorFilterDate_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.date;

export const getSelectorFilterToaNha_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.toa_nha;

export const getSelectorFilterDotThi_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.dot_thi;

export const getSelectorFilterKhuVuc_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.khu_vuc;

export const getSelectorFilterCaThi_LichThi2 = (state: AppState) =>
  state.lichthi2.filter_lichthi2.ca_thi;

export const getDataLichThi2HandleFIlter = createSelector(
  getSelectorAllLichThi2,
  getSelectorFilterDate_LichThi2,
  getSelectorFilterToaNha_LichThi2,
  getSelectorFilterBoMon_LichThi2,
  getSelectorFilterKhuVuc_LichThi2,
  getSelectorFilterDotThi_LichThi2,
  getSelectorFilterCaThi_LichThi2,
  (list, date, toaNha, bomon, khuVuc, dotThi, caThiList) => {
    return list.filter((item) => {
      if (!toaNha && item.idToa_Nha != null) {
        return bomon.length
          ? (item.ngay_Thi?.toString().indexOf(date) == -1 ? false : true) &&
              bomon.includes(item.bo_Mon)
          : item.ngay_Thi?.toString().indexOf(date) == -1
          ? false
          : true;
      } else {
        return (
          (item.idKhu_Vuc === khuVuc ? true : false) &&
          (item.ngay_Thi?.toString().indexOf(date) == -1 ? false : true) &&
          (item.idToa_Nha === toaNha ? true : false) &&
          (bomon.length
            ? bomon.includes(item.bo_Mon) && dotThi.includes(item.dot_Thi)
              ? true
              : false
            : false) &&
          (caThiList.includes(item.ca_Thi) ? true : false)
        );
      }
    });
  },
);

export const getSelectorLichThiByBlock = createSelector(
  getSelectorAllLichThi2,
  getSelectorFIlterBlock_LichThi2,
  (list, block) => {
    return list.filter((e) => {
      return e.maKy_Thi.split('_')[1] === block;
    });
  },
);

export const getSelectorNgayThiByBlock = createSelector(
  getSelectorAllNgayThi,
  getSelectorFIlterBlock_LichThi2,
  (ngay, block) => {
    return ngay.filter((e) => {
      return e.maKy_Thi.split('_')[1] == block;
    });
  },
);

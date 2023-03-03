import { createSelector } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import accountSlice from "../stores/slices/accountSlice";

export const giangVien2Selector = (state) => state.giangVien2.list;
export const giangVien2FilterValue = (state) => state.giangVien2.filterValue;

export const getGiangVien2 = createSelector(
  giangVien2Selector,
  giangVien2FilterValue,
  (list, filterValue) => {
    return list.filter((e) => {
      return filterValue !== "" ? e.BoMon === filterValue : e;
    });
  }
);

export const getLichThi2 = (state) => state.lichThi2.list;
export const nganhLichThi = (state) => state.lichThi2.filter.nganh;
export const toaNhaLichThi = (state) => state.lichThi2.filter.toaNha;
export const dateLichThi = (state) => state.lichThi2.filter.date;

export const filterLichThi = createSelector(
  getLichThi2,
  dateLichThi,
  toaNhaLichThi,
  nganhLichThi,
  (list, date, toaNha, nganh) => {
    return list.filter((item) => {
      if (toaNha == "" && item.idToa_Nha != null) {
        return nganh.length
          ? (item.ngay_Thi.indexOf(date) == -1 ? false : true) &&
              nganh.includes(item.bo_Mon)
          : item.ngay_Thi.indexOf(date) == -1
          ? false
          : true;
      } else {
        return (
          (item.ngay_Thi.indexOf(date) == -1 ? false : true) &&
          (item.idToa_Nha == toaNha ? true : false) &&
          (nganh.length ? nganh.includes(item.bo_Mon) : true)
        );
      }
    });
  }
);

export const getLichThi = (state) => state.lichThi.arrayA;

export const getAccount = (state) => {
  return state.account;
};

export const getLichThi1 = (state) => state.lichThi.arrayA;
export const nganhLichThi1 = (state) => state.lichThi.filter.nganh;
export const toaNhaLichThi1 = (state) => state.lichThi.filter.toaNha;
export const dateLichThi1 = (state) => state.lichThi.filter.date;

export const filterLichThiArrayA = createSelector(
  getLichThi1,
  dateLichThi1,
  toaNhaLichThi1,
  nganhLichThi1,
  (list, date, toaNha, nganh) => {
    return list.filter((item) => {
      if (toaNha == "" && item.idToa_Nha != null) {
        return nganh.length
          ? (item.ngay_Thi.indexOf(date) == -1 ? false : true) &&
              nganh.includes(item.bo_Mon)
          : item.ngay_Thi.indexOf(date) == -1
          ? false
          : true;
      } else {
        return (
          (item.ngay_Thi.indexOf(date) == -1 ? false : true) &&
          (item.idToa_Nha == toaNha ? true : false) &&
          (nganh.length ? nganh.includes(item.bo_Mon) : true)
        );
      }
    });
  }
);

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
      return (filterValue !== '') ? (e.BoMon === filterValue) : e
    });
  }
);

export const getLichThi2 = (state) => state.lichThi2.list;

export const getLichThi = (state) => state.lichThi.arrayA;

export const getAccount = (state) => {
  return state.account;
};

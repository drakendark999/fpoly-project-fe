import { useDispatch } from "react-redux";

import accountSlice from "../stores/slices/accountSlice";

export const giangVien2Selector = (state) => state.giangVien2.list;

export const getLichThi = (state) => state.lichThi.arrayA;

export const getAccount = (state) => {
  return state.account;
};

import { createSlice } from "@reduxjs/toolkit";

let currentAccountString = localStorage.getItem("fpoly_khaothi_account");

let accountSlice = createSlice({
  name: "account",
  initialState: {
    account: currentAccountString ? currentAccountString : "",
  },

  reducers: {
    setAccount: (state, { payload }) => {
      localStorage.setItem("fpoly_khaothi_account", payload);
      state.account = payload;
    },
    clearAccount: (state, { payload }) => {
      localStorage.removeItem("fpoly_khaothi_account");
      state.account = "";
    },
  },
});

export default accountSlice;

import { configureStore } from "@reduxjs/toolkit";
import dragAndDrogSlice from "./slices/dragAndDrogSlice";
import giangVien2Slice from "./slices/giangVien2Slice";
import accountSlice from "./slices/accountSlice";

const store = configureStore({
  reducer: {
    giangVien2: giangVien2Slice.reducer,
    lichThi: dragAndDrogSlice.reducer,
    account: accountSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import dragAndDrogSlice from "./slices/dragAndDrogSlice";
import giangVien2Slice from "./slices/giangVien2Slice";
import accountSlice from "./slices/accountSlice";
import lichThi2Slice from "./slices/lichThi2Slice";
import phongSlice from "./slices/phongSlice";

const store = configureStore({
  reducer: {
    giangVien2: giangVien2Slice.reducer,
    lichThi: dragAndDrogSlice.reducer,
    account: accountSlice.reducer,
    lichThi2: lichThi2Slice.reducer,
    phong : phongSlice.reducer
  },
});

export default store;

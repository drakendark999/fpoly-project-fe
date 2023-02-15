import { configureStore } from "@reduxjs/toolkit";
import dragAndDrogSlice from "./slices/dragAndDrogSlice";
import giangVien2Slice from "./slices/giangVien2Slice";

const store = configureStore({
  reducer: {
    giangVien2: giangVien2Slice.reducer,
    lichThi: dragAndDrogSlice.reducer,
  },
});

export default store;

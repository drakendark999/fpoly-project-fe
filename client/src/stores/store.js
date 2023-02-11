import { configureStore } from "@reduxjs/toolkit";
import dragAndDrogSlice from "./slices/dragAndDrogSlice";
import importFileSlice from "./slices/importFileSlice";

const store = configureStore({
  reducer: {
    importFile: importFileSlice.reducer,
    lichThi: dragAndDrogSlice.reducer,
  },
});

export default store;

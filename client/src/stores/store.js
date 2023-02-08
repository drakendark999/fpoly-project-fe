import { configureStore } from "@reduxjs/toolkit";
import importFileSlice from "./slices/importFileSlice";

const store = configureStore({
    reducer: {
        importFile: importFileSlice.reducer
    }
})


export default store;
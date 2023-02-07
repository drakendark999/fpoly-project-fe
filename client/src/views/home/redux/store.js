import { configureStore } from "@reduxjs/toolkit";
import importFileSlice from "../components/import-file/importFileSlice";

const store = configureStore({
    reducer: {
        importFile: importFileSlice.reducer
    }
})


export default store;
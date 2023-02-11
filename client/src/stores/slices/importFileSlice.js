import { createSlice } from "@reduxjs/toolkit";

const importFileSlice = createSlice({
  name: "importFile",
  initialState: {
    freeTimeTeachers: [
      // [
      //     {},
      //     {}
      // ]
    ],
  },
  reducers: {
    freeTimeTeachers: (state, { payload }) => {
      state.freeTimeTeachers = payload;
    },

    dropDragInColGV2: (state, { payload }) => {
      state.freeTimeTeachers = payload;
    },
  },
});

export default importFileSlice;

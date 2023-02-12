import { createSlice } from "@reduxjs/toolkit";

const importFileSlice = createSlice({
  name: "importFile",
  initialState: {
    filterValue:'',
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

    // deleteFreeTimeTeachers: (state,action) => {
    //   state.filterValue = action.payload
    // }
  },
});

export default importFileSlice;

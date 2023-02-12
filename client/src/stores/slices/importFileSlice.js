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

    deleteFreeTimeTeachers: (state,action) => {
      console.log(action.payload);
      state.freeTimeTeachers = state.freeTimeTeachers.filter(data => data.name!=action.payload.name)
    }
  },
});

export default importFileSlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllGV2 = createAsyncThunk(
  "importFile/fetchAllGV2",
  async () => {
    const response = await axios.get("http://localhost:1372/api/gv2");
    return response.data;
  }
);

export const addGV2 = createAsyncThunk('importFile/addGV2',
async(data) => {
    const response = await axios.post("http://localhost:1372/api/gv2", data);
    return response.data;
})

const importFileSlice = createSlice({
  name: "importFile",
  initialState: {
    filterValue: "",
    freeTimeTeachers: [],
  },
  reducers: {
    freeTimeTeachers: (state, { payload }) => {
      state.freeTimeTeachers = payload;
    },

    // deleteFreeTimeTeachers: (state,action) => {
    //   state.filterValue = action.payload
    // }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchAllGV2.fulfilled, (state, {payload}) => {
      state.freeTimeTeachers = payload;
    })
    .addCase(addGV2.fulfilled, (state, {payload}) => {
      state.freeTimeTeachers.push(payload);
      console.log("New data", payload);
    })
  }
});

export default importFileSlice;

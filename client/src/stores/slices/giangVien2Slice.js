import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllGV2 = createAsyncThunk(
  "giangVien2/fetchAllGV2",
  async () => {
    const response = await axios.get("http://localhost:1372/api/gv2");
    return response.data;
  }
);

export const addGV2 = createAsyncThunk('giangVien2/addGV2',
async(data) => {
    const response = await axios.post("http://localhost:1372/api/gv2", data);
    return response.data;
})

const giangVien2Slice = createSlice({
  name: "giangVien2",
  initialState: {
    filterValue: "",
    list: [],
  },
  reducers: {
    // giangVien2: (state, { payload }) => {
    //   state.list = payload;
    // },

    // deleteFreeTimeTeachers: (state,action) => {
    //   state.filterValue = action.payload
    // }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchAllGV2.fulfilled, (state, {payload}) => {
      state.list = payload;
    })
    .addCase(addGV2.fulfilled, (state, {payload}) => {
      state.list.push(payload);
      console.log("Data GV2 mới đã thêm vào CSDL:", payload);
    })
  }
});

export default giangVien2Slice;

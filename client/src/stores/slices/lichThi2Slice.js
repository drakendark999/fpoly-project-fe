import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_LOCAL;
// const apiURL = import.meta.env.VITE_API_URL;

export const getAllLichThi2 = createAsyncThunk("lichThi2/getAll", async () => {
  const response = await axios.get(`${apiURL}/api/lichthi2`);
  return response.data;
});

export const addLichThi2 = createAsyncThunk("lichThi2/add", async (data) => {
  const response = await axios.post(`${apiURL}/api/lichthi2`, data);
  return response.data;
});

let lichThi2Slice = createSlice({
  name: "lichThi2",
  initialState: {
    filter: {
      date: "2022-12-18",
      toaNha: "",
      nganh: [],
    },
    list: [],
    count: 0,
  },

  reducers: {
    setLichThi2: (state, { payload }) => {
      state.list = payload;
    },
    setToaNha: (state, { payload }) => {
      // console.log(payload);
      state.filter.toaNha = payload;
    },
    setDate: (state, { payload }) => {
      state.filter.date = payload;
    },
    setNganhLT: (state, action) => {
      // console.log(action);
      state.filter.nganh = action.payload;
    },
    deleteNganhLT: (state, { payload }) => {
      // console.log("data: ", payload);
      // console.log(state.filter.nganh);
      let arrNganh = state.filter.nganh.filter((item) => {
        return item == payload ? false : true;
      });
      // console.log(arrNganh);
      state.filter.nganh = arrNganh;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllLichThi2.fulfilled, (state, { payload }) => {
        state.list = payload;
      })
      .addCase(addLichThi2.fulfilled, (state, { payload }) => {
        // state.list.push(payload);
        alert("Upload thành công lịch thi");
      });
  },
});

export default lichThi2Slice;

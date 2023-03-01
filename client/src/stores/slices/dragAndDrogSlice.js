import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_LOCAL;
// const apiURL = import.meta.env.VITE_API_URL;


const dragAndDrogSlice = createSlice({
  name: "lichThi",
  initialState: {
    arrayA: [],
  },
  reducers: {

    addGv2: (state, action) => {
      state.arrayA.find((e) => e.id == action.payload.id).gv2 =
        action.payload.name;
    },
    editGv2: (state, action) => {
      state.arrayA.find((e) => e.id == action.payload.idSecond).gv2 =
        state.arrayA.find((e) => e.id == action.payload.idFirst).gv2;
      state.arrayA.find((e) => e.id == action.payload.idFirst).gv2 = "";
    },

    editGv1: (state, action) => {
      // [index, objN] = action.payload;
      let index = action.payload[0];
      let objN = action.payload[1];

      state.arrayA.splice(index, 1, objN);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGV1.fulfilled, (state, action) => {
        state.arrayA = action.payload;
      })
      .addCase(fetchUpdateLichThi.fulfilled, (state, action) => {
        state.arrayA = action.payload;
        alert("Lưu thành công!!");
      })
      .addCase(filterWithToaNha.fulfilled, (state, action) => {
        state.arrayA = action.payload;
      })
      .addCase(filterWithDate.fulfilled, (state, action) => {
        state.arrayA = action.payload;
      })
      .addCase(filterWithChuyenNganh.fulfilled, (state, action) => {
        state.arrayA = action.payload;
      });
  },
});

export default dragAndDrogSlice;

export const fetchAllGV1 = createAsyncThunk("lichThi/fetchAllGV1", async () => {
  const response = await axios.get(`${apiURL}/api/lichthi`);
  let arr = [];

  // console.log(response.data);
  response.data.map((item) => {
    let obj = {
      id: parseInt(item.id),
      mon: item.ma_Mon,
      ten_Phong: item.ten_Phong,
      lop: item.ma_Lop,
      gv1: item.GV1,
      gv2: item.GV2,
      stt: item.status,
      caThi: item.ca_Thi,
      ngay_Thi: item.ngay_Thi,
    };

    arr.push(obj);
  });
  return arr;
});

export const filterWithToaNha = createAsyncThunk(
  "lichThi/FilterToaNha",
  async (value) => {
    let date = localStorage.getItem("date");
    let chuyenNganh = localStorage.getItem("Chuyen nganh");
    let toaNha = value;
    console.log(date);
    const response = await axios.get(
      `${apiURL}/api/lichthi/toaNha/${date}/${toaNha}/${chuyenNganh}`
    );
    let arr = [];
    response.data.map((item) => {
      let obj = {
        id: parseInt(item.id),
        mon: item.ma_Mon,
        ten_Phong: item.ten_Phong,
        lop: item.ma_Lop,
        gv1: item.GV1,
        gv2: item.GV2,
        stt: item.status,
        caThi: item.ca_Thi,
        ngay_Thi: item.ngay_Thi,
      };

      arr.push(obj);
    });
    return arr;
  }
);

export const filterWithChuyenNganh = createAsyncThunk(
  "lichThi/FilterChuyenNganh",
  async (value) => {
    let date = localStorage.getItem("date");
    let toaNha = localStorage.getItem("Toa nha");
    console.log(value);
    const response = await axios.get(
      `${apiURL}/api/lichthi/chuyenNganh/${date}/${toaNha}/${value}`
    );
    let arr = [];
    response.data.map((item) => {
      let obj = {
        id: parseInt(item.id),
        mon: item.ma_Mon,
        ten_Phong: item.ten_Phong,
        lop: item.ma_Lop,
        gv1: item.GV1,
        gv2: item.GV2,
        stt: item.status,
        caThi: item.ca_Thi,
        ngay_Thi: item.ngay_Thi,
      };

      arr.push(obj);
    });
    return arr;
  }
);

export const filterWithDate = createAsyncThunk(
  "lichThi/FilterDate",
  async (date) => {
    console.log(date);
    let toaNha = localStorage.getItem("Toa nha");
    let chuyenNganh = localStorage.getItem("Chuyen nganh");
    const response = await axios.get(
      `${apiURL}/api/lichthi/date/${date}/${toaNha}/${chuyenNganh}`
    );
    console.log(response.data);
    let arr = [];
    response.data.map((item) => {
      let obj = {
        id: parseInt(item.id),
        mon: item.ma_Mon,
        ten_Phong: item.ten_Phong,
        lop: item.ma_Lop,
        gv1: item.GV1,
        gv2: item.GV2,
        stt: item.status,
        caThi: item.ca_Thi,
        ngay_Thi: item.ngay_Thi,
      };

      arr.push(obj);
    });
    return arr;
  }
);

export const fetchUpdateLichThi = createAsyncThunk(
  "lichThi/fetchUpdateLichThi",
  async (data) => {
    // const response = await axios.put(
    //   `${apiURL}/api/lichthi/updateLichThi`,
    //   data
    // );
    let d = [];
    data.forEach(async (item) => {
      d.push(item);
      await axios.put(`${apiURL}/api/lichthi/updateLichThi`, {
        id: item.id,
        GV1: item.gv1,
        GV2: item.gv2,
      });
      //   console.log(item);
    });
    console.log("Database Upload", d);
    return d;
  }
);

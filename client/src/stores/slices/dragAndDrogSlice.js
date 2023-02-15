import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const arrayA = [];
const dragAndDrogSlice = createSlice({
  name: "lichThi",
  initialState: {
    arrayA: [],
  },
  reducers: {
    // reducers: {
    //   addGv2: (state, action) => {
    //     state.arrayA.find((e) => e.id == action.payload.id).gv2 =
    //       action.payload.name;
    //   },
    //   editGv2: (state, action) => {
    //     console.log(arrayA.find((e) => e.id == action.payload.idFirst).gv2);
    //     state.arrayA.find((e) => e.id == action.payload.idSecond).gv2 =
    //       state.arrayA.find((e) => e.id == action.payload.idFirst).gv2;
    //     state.arrayA.find((e) => e.id == action.payload.idFirst).gv2 = "";
    //   },
    // },

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
      });
  },
});

export default dragAndDrogSlice;

export const fetchAllGV1 = createAsyncThunk("lichThi/fetchAllGV1", async () => {
  const response = await axios.get("http://localhost:1372/api/lichthi");
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
      stt: "confirm",
      caThi: item.ca_Thi,
    };

    arr.push(obj);
  });
  return arr;
});

export const fetchUpdateLichThi = createAsyncThunk(
  "lichThi/fetchUpdateLichThi",
  async (data) => {
    // const response = await axios.put(
    //   `http://localhost:1372/api/lichthi/updateLichThi`,
    //   data
    // );
    let d = [];
    data.forEach(async (item) => {
      d.push(item);
      await axios.put(`http://localhost:1372/api/lichthi/updateLichThi`, {
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

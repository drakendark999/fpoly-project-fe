import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const arrayA = [
//   {
//     id: 1,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 2,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 3,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 4,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 5,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 6,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 7,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 8,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 9,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 10,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 11,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 12,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 13,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 14,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 15,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 16,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 17,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 18,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 19,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 20,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 21,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 22,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 23,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 24,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 25,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 26,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 27,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 28,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 29,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 30,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 31,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 32,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 33,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 34,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 35,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 36,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 37,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 38,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 39,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 40,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 41,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 42,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 43,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 44,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 45,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 46,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 47,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "refuse",
//   },
//   {
//     id: 48,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 49,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 50,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 51,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 52,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "waiting",
//   },
//   {
//     id: 53,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 54,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 55,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
//   {
//     id: 56,
//     mon: "",
//     lop: "",
//     gv1: "",
//     gv2: "",
//     stt: "",
//   },
//   {
//     id: 57,
//     mon: "IT18207",
//     lop: "WEB1013",
//     gv1: "locth5",
//     gv2: "longnv36",
//     stt: "confirm",
//   },
// ];

const arrayA = [];
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
      console.log(arrayA.find((e) => e.id == action.payload.idFirst).gv2);
      state.arrayA.find((e) => e.id == action.payload.idSecond).gv2 =
        state.arrayA.find((e) => e.id == action.payload.idFirst).gv2;
      state.arrayA.find((e) => e.id == action.payload.idFirst).gv2 = "";
    },

    editGv1: (state, action) => {
      console.log(action.payload);
      // [index, objN] = action.payload;
      let index = action.payload[0];
      let objN = action.payload[1];
      console.log("index: ", index);
      console.log("ObjN: ", objN);
      state.arrayA.splice(index, 1, objN);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllGV1.fulfilled, (state, action) => {
      state.arrayA = action.payload;
    });
  },
});

export default dragAndDrogSlice;

export const fetchAllGV1 = createAsyncThunk("lichThi/fetchAllGV1", async () => {
  const response = await axios.get("http://localhost:1372/api/lichthi");
  //   {
  //     id: 1,
  //     mon: "IT18207",
  //     lop: "WEB1013",
  //     gv1: "locth5",
  //     gv2: "longnv36",
  //     stt: "confirm",
  //   },
  let arr = [];
  console.log(response.data);
  response.data.map((item) => {
    let obj = {
      id: parseInt(item.id),
      mon: item.ma_Mon,
      lop: item.ma_Lop,
      gv1: item.GV1,
      gv2: item.GV2,
      stt: "confirm",
    };
    arr.push(obj);
  });
  return arr;
});

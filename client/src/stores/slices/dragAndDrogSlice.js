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
            state.arrayA.find((e) => e.id == action.payload.id).gv2 = action.payload.name;
        },
        editGv2: (state, action) => {
            state.arrayA.find((e) => e.id == action.payload.idSecond).gv2 = state.arrayA.find((e) => e.id == action.payload.idFirst).gv2;
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
        };

        arr.push(obj);
    });
    return arr;
});

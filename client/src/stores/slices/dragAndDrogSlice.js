import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_LOCAL;
// const apiURL = import.meta.env.VITE_API_URL;

const dragAndDrogSlice = createSlice({
    name: "lichThi",
    initialState: {
        filter: {
            date: "2022-10-22",
            toaNha: "F",
            nganh: [],
        },

        arrayA: [],
    },

    reducers: {
        addGv2: (state, action) => {
            state.arrayA.find((e) => e.id == action.payload.id).GV2 = action.payload.name;
        },
        editGv2: (state, action) => {
            state.arrayA.find((e) => e.id == action.payload.idSecond).GV2 = state.arrayA.find((e) => e.id == action.payload.idFirst).GV2;
            state.arrayA.find((e) => e.id == action.payload.idFirst).GV2 = "";
        },

        editGv1: (state, action) => {
            let index = action.payload[0];
            let objN = action.payload[1];

            state.arrayA.splice(index, 1, objN);
        },
        setToaNha: (state, { payload }) => {
            state.filter.toaNha = payload;
        },
        setDate: (state, { payload }) => {
            state.filter.date = payload;
        },
        setNganhLT: (state, action) => {
            state.filter.nganh = action.payload;
        },

        deleteNganhLT: (state, { payload }) => {
            let arrNganh = state.filter.nganh.filter((item) => {
                return item == payload ? false : true;
            });

            state.filter.nganh = arrNganh;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllLichThi2.fulfilled, (state, action) => {
                state.arrayA = action.payload;
            })

            // .addCase(fetchAllGV1.fulfilled, (state, action) => {
            //     state.arrayA = action.payload;
            // })

            .addCase(fetchUpdateLichThi2.fulfilled, (state, action) => {
                state.arrayA = action.payload;
                alert("Lưu thành công!!!!!!");
            });
    },
});

export default dragAndDrogSlice;

export const getAllLichThi2 = createAsyncThunk("lichThi2/getAll", async () => {
    const response = await axios.get(`${apiURL}/api/lichthi2`);
    
    return response.data;
});

export const fetchUpdateLichThi2 = createAsyncThunk("lichThi2/fetchUpdateLichThi2", async (data) => {
   
    const response = await axios.put(`${apiURL}/api/lichthi2/updateLichThi`, data);
   
    return data;
    // data.forEach(async (item) => {
    //     d.push(item);
    //     await axios.put(`${apiURL}/api/lichthi2/updateLichThi`, {
    //         id: item.id,
    //         GV1: item.gv1,
    //         GV2: item.gv2,
    //     });
    // });
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL_LOCAL;
// const apiURL = import.meta.env.VITE_API_URL;


const phongSlice = createSlice({
    name: "phong",
    initialState: {
        phongList: [],
        filter: 'F'
    },
    reducers: {
        setPhongBaseToaNha: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPhong.fulfilled, (state, action) => {
                state.phongList = action.payload;
            })
    },
});

export const fetchAllPhong = createAsyncThunk("phong/fetchAllPhong", async () => {
    const response = await axios.get(`${apiURL}/api/phong`);
    return response.data;
});

export default phongSlice;

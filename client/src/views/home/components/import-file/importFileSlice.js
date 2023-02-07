import { createSlice } from "@reduxjs/toolkit";

const importFileSlice = createSlice({
    name: "importFile",
    initialState: [],
    reducers: {
        freeTimeTeachers: (state, action) => { 
            state.push(action.payload)
        }
    }
})

export default importFileSlice;
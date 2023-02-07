import { createSlice } from "@reduxjs/toolkit";

const importFileSlice = createSlice({
    name: "importFile",
    initialState: {
        freeTimeTeachers: [] 
    },
    reducers: {
        freeTimeTeachers: (state, action) => { 
            state.freeTimeTeachers.push(action.payload)
        }
    }
})

export default importFileSlice;
import { createSlice } from "@reduxjs/toolkit";

const engineeringSlice = createSlice({
    name: "engineering",
    initialState: {
        page:0
    },
    reducers: {
        pageNumber:(state,action)=>{
            state.page=action.payload
        }
    }
})

export const {pageNumber} = engineeringSlice.actions
export default engineeringSlice.reducer


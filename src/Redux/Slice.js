import { createSlice } from "@reduxjs/toolkit";

const engineeringSlice = createSlice({
    name: "engineering",
    initialState: {

        selectedPlant:undefined,

        selectedMill: undefined,

        consHomeTop:0,
        consAboutTop:0,
        consValuesTop:0,
        consClientTop:0,
        consContactTop:0,

    },
    reducers: {
        plantsDispatch:(state,action)=>{
            state.selectedPlant=action.payload
            console.log(action.payload,"payload")
        },

        handleCompanies: (state, action) => {
            state.selectedMill = action.payload
        },

        constructionHome:(state,action)=>{
            state.consHomeTop=action.payload
        },
        constructionAbout:(state,action)=>{
            state.consAboutTop=action.payload
        },
        constructionValues:(state,action)=>{
            state.consValuesTop=action.payload
        },
        constructionClient:(state,action)=>{
            state.consClientTop=action.payload
        },
        constructionContact:(state,action)=>{
            state.consContactTop=action.payload
        },

    }
})

export const {plantsDispatch, handleCompanies,constructionHome,constructionAbout,constructionValues,constructionClient,constructionContact } = engineeringSlice.actions
export default engineeringSlice.reducer


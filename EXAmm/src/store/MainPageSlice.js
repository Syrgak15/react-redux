import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name:'mainPage',
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push({id:Date.now(),name:action.payload});
        },

    }
})
export const {addUser} = mainSlice.actions;
export default mainSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';


const mainSlice=createSlice({
    name:'main',
    initialState:{
        inputValue:''
    },
    reducers:{
            clickButton:(state,action)=>{
                state.inputValue += action.payload
            },
            clearInput:(state,action)=>{
                state.inputValue = '';
            },
            countInput:(state,action)=>{
                state.inputValue = eval(action.payload)
            }
    }
})

export const {clickButton,countInput,clearInput} = mainSlice.actions
export default mainSlice.reducer
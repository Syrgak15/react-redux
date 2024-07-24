import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


export const getUserAll=createAsyncThunk(
    'getUserAll',
    async function(info,{dispatch}){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch(getUsers(data))
        }
        catch(e){
            console.log(e)
        }
    }
)

export const getUserOne = createAsyncThunk(
    'getUserOne',
    async function(id,{dispatch}){
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const data = await response.json()
            dispatch(getOneUser(data))
        }
        catch(e){
            console.log(e)
        }
    }
)


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
        user:[]
    },
    reducers:{
            getUsers:(state,action)=>{
                state.users = action.payload
            },
            getOneUser:(state,action)=>{
                state.user = action.payload
            }
    }
})

export const{getUsers,getOneUser} = usersSlice.actions

export default usersSlice.reducer;
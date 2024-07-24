import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UsersPageSlice';

export const store = configureStore({
    reducer:{
        userReducer

    }
})
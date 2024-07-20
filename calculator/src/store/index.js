import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './MainPageSlice'


export const store = configureStore({
    reducer: {
        mainReducer
    }
})

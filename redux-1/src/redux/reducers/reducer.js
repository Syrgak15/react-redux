import {combineReducers} from "@reduxjs/toolkit";
import mainPageReducer from "./mainPageReducer";
import contactsPageReducer from "./contactsPageReducer";
import usersPageReducer from "./usersPageReducer";
import userCardReducer from "./userCardReducer";

export const rootReducers = combineReducers({
        mainPageReducer,
        contactsPageReducer,
        usersPageReducer,
        userCardReducer

})
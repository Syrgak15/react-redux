import {combineReducers} from "@reduxjs/toolkit";
import mainPageReducer from "./mainPageReducer";
import contactsPageReducer from "./contactsPageReducer";
import usersPageReducer from "./usersPageReducer";

export const rootReducers = combineReducers({
        mainPageReducer,
        contactsPageReducer,
        usersPageReducer

})
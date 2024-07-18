import {types} from "../types";

const initialState={
    user:[]
}
 function userCardReducer(state=initialState, action){
    switch(action.type){
        case types.USER:
            return {...state,user:action.payload};
        default: return state
    }
}

export default userCardReducer;


const initialState={
    number:0
}

function Reducer(state = initialState,action) {
        if(action.type === 'PLUS_ONE'){
            return {...state,number:state.number+1}
        }else if(action.type === 'RESET_NUMBER'){
            return {...state,number:action.payload}
        }else if(action.type === 'MINUS_ONE'){
            return {...state,number:Math.max(state.number-1,0)}
        }else if(action.type === 'PLUS_TEN') {
            return {...state,number: state.number + 10}
        }else if(action.type === 'MINUS_TEN') {
            return {...state, number:Math.max(state.number - 10,0)}
        }

    return state
}

export default Reducer;
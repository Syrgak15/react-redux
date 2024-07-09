import {useDispatch, useSelector} from "react-redux";

function MainPage() {

    const number = useSelector(state=>state.number)
    const dispatch = useDispatch();

    const plusOne=()=>{
        dispatch({
            type:'PLUS_ONE',

        })
    }

    const minusOne=()=>{
        dispatch({
            type:'MINUS_ONE'
        })
    }

    const plusTen=()=>{
        dispatch({
            type:'PLUS_TEN'
        })
    }

    const minusTen=()=>{
        dispatch({
            type:'MINUS_TEN'
        })
    }

    const resetNumber = ()=>{
        dispatch({
            type:'RESET_NUMBER',
            payload:0
        })
    }

    return (
        <div>
            <span>{number}</span>
            <p>-------------------------</p>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen}>-10</button>
            <button onClick={resetNumber}>reset</button>
        </div>
    );
}

export default MainPage;
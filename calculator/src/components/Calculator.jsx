import React, {useState} from 'react';
import styles from './Calculator.modules.css'
import {useDispatch, useSelector} from "react-redux";
import {clearInput, clickButton, countInput} from "../store/MainPageSlice";

const Calculator = () => {

    const inputValue = useSelector(state=>state.mainReducer.inputValue)
    const dispatch = useDispatch()

    const clearInputValue = ()=>{
        dispatch(clearInput(inputValue))
    }

    const countInputValue=()=>{
        dispatch(countInput(inputValue))
    }


    return (
        <div>
            <div className="wrapper">
                <input type="text" value={inputValue}/>
                <div className="buttons">
                    <button onClick={()=> dispatch(clickButton('7'))}>7</button>
                    <button onClick={()=> dispatch(clickButton('8'))}>8</button>
                    <button onClick={()=> dispatch(clickButton('9'))}>9</button>
                    <button onClick={()=> dispatch(clickButton('/'))}>&divide;</button>
                </div>
                <div className="buttons">
                    <button onClick={()=> dispatch(clickButton('4'))}>4</button>
                    <button onClick={()=> dispatch(clickButton('5'))}>5</button>
                    <button onClick={()=> dispatch(clickButton('6'))}>6</button>
                    <button onClick={()=> dispatch(clickButton('*'))}>&times;</button>
                </div>
                <div className="buttons">
                    <button onClick={()=> dispatch(clickButton('1'))}>1</button>
                    <button onClick={()=> dispatch(clickButton('2'))}>2</button>
                    <button onClick={()=> dispatch(clickButton('3'))}>3</button>
                    <button onClick={()=> dispatch(clickButton('-'))}>-</button>
                </div>
                <div className="buttons">
                    <button onClick={()=> dispatch(clickButton('0'))}>0</button>
                    <button onClick={clearInputValue}>C</button>
                    <button onClick={()=> dispatch(clickButton('+'))}>+</button>
                    <button onClick={countInputValue}>=</button>
                </div>

            </div>
        </div>
    );
};

export default Calculator;
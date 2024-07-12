import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {rootReducers} from './redux/reducers/reducer';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import {applyMiddleware} from "@reduxjs/toolkit";

const storeApp=createStore(rootReducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeApp}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


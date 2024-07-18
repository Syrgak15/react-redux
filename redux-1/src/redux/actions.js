import {types} from './types.js'
import {type} from "@testing-library/user-event/dist/type";

export function changeTitleAction(){
    return {
        type:types.CHANGE_TITLE
    }
}

export function asyncFunctionAction(){
        return function(){
            setTimeout(()=>{
                alert('Hello')
            },2000)
        }
}

export function getUsersAction(users){
    return {
        type: types.USERS,
        payload:users
    }
}

export function getUserId(user){
    return {
        type: types.USER,
        payload:user
    }
}

export function fetchUsersAction(){
    return async function(dispatch){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export function fetchUsersId(id){
    return async function(dispatch){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getUserId(data))
    }
}



import {fetchUsersId} from "../redux/actions";
import styles from '../components/UserCard.modules.css'
import {useDispatch, useSelector} from "react-redux";
import getUsers from "../pages/UsersPage/UsersPage";
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import UserCardOpen from "./UserCardOpen";



function UserCard({userInfo}) {
    const dispatch=useDispatch()
    const getUser=()=>{
        dispatch(fetchUsersId(userInfo.id))

    }
    return (
        <div
            onClick={()=> getUser()}
            className='card'>
            <img
                src="https://cdn-icons-png.flaticon.com/512/1752/1752735.png"
                alt="image"
                style={{height:'100px'}}
            />
            <h1 className='title'>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
            <p>{userInfo.email}</p>


        </div>
    );
}

export default UserCard;
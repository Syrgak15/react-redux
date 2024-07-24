import React from 'react';
import {Link} from "react-router-dom";
import styles from './UserCard.modules.css'
import {getUserOne} from "../store/UsersPageSlice";
import {useDispatch} from "react-redux";

const UserCard = ({userInfo}) => {
    const dispatch=useDispatch()

    return (
        <div>
            <div
                onClick={() => dispatch(getUserOne(userInfo.id))}
                className="card">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1752/1752735.png"
                    alt="image"
                    style={{height: '100px'}}
                />
                <p>{userInfo.id}</p>
                <h1 className='title'>{userInfo.name}</h1>
                <p>{userInfo.username}</p>
                <p>{userInfo.email}</p>
            </div>

        </div>
    );
};

export default UserCard;
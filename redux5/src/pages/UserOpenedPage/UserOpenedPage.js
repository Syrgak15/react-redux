import React from 'react';
import {useSelector} from "react-redux";
import styles from './UserOpenedPage.modules.css'

const UserOpenedPage = () => {
    const user = useSelector(state=>state.userReducer.user)
    return (
        <div className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/1752/1752735.png" alt="img"/>
            <h1>{user.id}</h1>
            <span>Name: {user.name}</span>
            <span>Username: {user.username}</span>
            <span>Email: {user.email}</span>
            {user.address && (
                <span>City: {user.address.city}</span>
            )}
            <span>Phone: {user.phone}</span>
            <span>Website: {user.website}</span>
            {user.company && (
                <>
                    <span>Company name: {user.company.name}</span>
                    <span>Company catchPhrase: {user.company.catchPhrase}</span>
                    <span>Company bs: {user.company.bs}</span>
                </>
            )}
        </div>
    );
};

export default UserOpenedPage;
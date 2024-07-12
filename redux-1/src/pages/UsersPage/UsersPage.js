import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";
import UserCard from "../../components/UserCard";
import styles from './UsersPage.modules.css'

function UsersPage() {
    const users=useSelector(state=>state.usersPageReducer.users)
    const dispatch = useDispatch();

     function getUsers(){
        dispatch(fetchUsersAction())
    }
    return (
        <div>
            <button
                className='btn'
                onClick={getUsers}>Get users</button>
            <div className='wrapper'>
                {users.map(user=><UserCard userInfo={user}/>)}
            </div>
        </div>
    );
}

export default UsersPage;
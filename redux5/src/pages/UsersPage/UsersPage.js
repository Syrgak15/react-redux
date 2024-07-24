import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './UsersPage.modules.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserAll, getUserOne} from "../../store/UsersPageSlice";
import UserCard from "../../components/UserCard";

const UsersPage = () => {
    const users=useSelector(state=>state.userReducer.users)
    const dispatch = useDispatch();

    return (
        <div>
            <div className="wrapper">
                <button onClick={()=>dispatch(getUserAll())} className='btn'>Get Users</button>
                {users.map((user)=>(
                    <NavLink to='/user'>
                        <UserCard userInfo={user}/>
                    </NavLink>
                    )
                )}
            </div>
        </div>
    );
};

export default UsersPage;
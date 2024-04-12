import React from 'react'
import '../CSS/Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reduxwork/UserSlice'


const Profile = () => {
    const { UserData } = useSelector((state) => state.user)
    const dispatcher = useDispatch()
    return (
        <div className='text'>
            <h4>Profile</h4>
            <h5>Name:{UserData.CustomerName}</h5>
            <h5>Email:{UserData.CustomerEmail}</h5>

            <button onClick={() => dispatcher(logout())}>Logout</button>
        </div>
    )
}

export default Profile
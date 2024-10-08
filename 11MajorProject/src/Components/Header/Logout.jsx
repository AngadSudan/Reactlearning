import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Appwrite/Auth'
import { logout } from '../../store/authSlice'
function Logout() {
    const dispatch= useDispatch();  
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    };
  return (
    <button class="inline-block px-6 py-2 duration-200 hover:bg-blue-100  rounded-full">Logout</button>
  )
}

export default Logout
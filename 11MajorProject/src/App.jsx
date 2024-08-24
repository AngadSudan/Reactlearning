import React, { useState, useEffect} from 'react'
import {useDispatch} from "react-redux"
import authService from "./Appwrite/Auth"
import {login,logout} from "./store/authSlice"
import Layout from './Components/layout'
function App() {
  const [loading,setLoading]= useState(true);
  const dispatch= useDispatch();
  useEffect(()=>{
    authService.currentUser()
    .then((data)=>{
      if(data){
        dispatch(login({data}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading? (
    <>
    <div className='w-screen h-full'>
      <Layout/>
    </div>
    </>
  ):null
}

export default App
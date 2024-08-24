import React from 'react'
import {Container,Logout,Logo} from "../index"
import {Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const authStatus= useSelector((state)=>{
    state.auth.status
  })
  const navigate= useNavigate()
  const navItems=[
    {
      name:'Home',
      slug:"/",
      active:true
    },{
      name:"Login",
      slug:"/Login",
      active:!authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]
  return (
    <>
      <header className='py-3 shadow-md bg-gray-300'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to="/" className='text-lg font-bold text-gray-800 hover:text-gray-600'>
                <Logo />
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item)=>(
                item.active?(
                  <li key={item.name}>
                    <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration:200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                  </li>
                ):null
              ))}

              {authStatus && (
                <li>
                  <Logout/>
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
        {/* <div className="flex justify-around  w-full h-[7rem] p-4 border-b-2">
            <div className="w-[40%] "> <h1 className="text-3xl text-center pt-4">Alumni Hub</h1> </div>
            <div className="w-[60%] ">
                <ul className="flex list-none justify-evenly pt-4">
                    <li>Home</li>
                    <li>Alumni NetWork</li>
                    <li> Chat</li>
                    <li> Profile</li>
                </ul>
            </div>
        </div> */}
    </>
  )
}

export default Header
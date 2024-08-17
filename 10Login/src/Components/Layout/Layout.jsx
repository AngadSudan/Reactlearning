import React from 'react'
import {Outlet} from "react-router-dom"
import { Link,NavLink } from 'react-router-dom'
import Header from '../Header/Header'
function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Layout
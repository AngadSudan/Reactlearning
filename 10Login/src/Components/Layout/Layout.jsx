import React from 'react'
import {Outlet} from "react-router-dom"
import { Link,NavLink } from 'react-router-dom'
function Layout() {
  return (
    <>
        <h1>Let's see how you do</h1>
        <Outlet/>
    </>
  )
}

export default Layout
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import './index.css'
import Layout from './components/Layout/Layout.jsx'
import { About, Home, Contact, User, Github} from './components/index.js'
import { Gitinfoloader } from './components/Github/Github.jsx'

// const router= createBrowserRouter([
// {
//   path:"/",
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"About",
//       element:<About/>
//     },
//     {
//       path:"Contact",
//       element:<Contact />
//     }
//   ]
// }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route loader={Gitinfoloader} path='Github' element={<Github/>} />
      <Route path='user/:userid' element={ <User/> } />
  </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

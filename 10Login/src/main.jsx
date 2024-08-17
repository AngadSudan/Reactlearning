import React from "react";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import {Login,Signup,Layout} from './Components/index.js'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="Login" element={<Login/>} />
      <Route path="Signup" element={<Signup/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

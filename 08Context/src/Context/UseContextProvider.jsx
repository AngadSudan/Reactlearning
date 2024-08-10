import React, { useState } from "react";
import UserContext from "./UserContext";
import Login from "../Components/Login";
import Profile from "../Components/Profile";

const UserContextProvider=({children})=>{
    const [user, setUser] = useState(null);
    return (
        <UserContextProvider value={{user,setUser}}>
            <h1>React aur Context</h1>
            <Login/>
            <Profile/>
        </UserContextProvider>
    )
}
export default UserContextProvider;
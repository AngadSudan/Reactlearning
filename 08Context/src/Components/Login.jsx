import { useState,useContext } from "react";
import UserContext from "../Context/UserContext";
import UserContextProvider from "../Context/UseContextProvider";
function Login(){
    const [username, setUsername]= useContext('');
    const [password, setPassword]= useContext('');
    const [setUser]= useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <>
            <div><h2>Login</h2></div>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="username" />
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
export default Login;
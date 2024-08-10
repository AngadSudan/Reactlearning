import React,{useContext} from "react";
import UserContext from "../Context/UserContext";
function Profile(){
    const {user}= useContext(UserContext);
    if(!user) return <div>Login </div>
    return(
        <>
            <div className="h-[30px] w-[30px] rounded-full bg-teal-200">Kuch Bhi</div>
            <div>Welcome {user.username}</div>
        </>
    )
}
export default Profile;
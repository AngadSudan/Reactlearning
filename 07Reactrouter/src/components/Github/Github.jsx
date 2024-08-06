// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [follow, setFollowe] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AngadSudan').
    //     then(res=>res.json()).
    //     then(data => setFollowe(data))
    // },[]);
    const follow= useLoaderData();
    console.log("data recieved",follow);
    
    return(
    <>
        <div className="flex justify-center text-4xl my-4">
            followers : {follow.followers}
            <br/>
            <img className="my-16" src={follow.avatar_url} alt="git-profile" width={300}/>
        </div>
    </>);
}

export default Github;
export  const Gitinfoloader=async ()=>{
    const response= await fetch('https://api.github.com/users/AngadSudan')
    console.log("Api return",response);
    
    return response.json();
}
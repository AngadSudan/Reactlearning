import { useParams } from "react-router-dom";
function User(){
    const {userid}= useParams();
    return (
        <>
            <h1 className="text-center text-3xl ">User : {userid} </h1>
        </>
    );
}

export default User;
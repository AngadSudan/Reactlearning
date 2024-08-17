import {Link,NavLink} from "react-router-dom"
function Header(){
    return(
        <>
            <div className="flex justify-between w-full h-[7rem] p-2 m-0 border-b-2">
                <div className="w-[30%]  text-center text-3xl font-bold py-8"><Link to="#">Your Logo</Link></div>
                <div className="m-0 py-8">
                    <ul className="flex justify-evenly w-[40%] text-xl">
                        <li className="mx-8">
                            <NavLink to="/Signup" className={({isActive})=>
                                isActive ? "text-red-900  font-bold" : "text-gray-700"
                                }>SignUP</NavLink></li>
                        <li className="mx-8">
                            <NavLink to="/Login" 
                                className={({ isActive }) => 
                                    isActive ? "text-red-900 font-bold" : "text-black"
                                }>Login</NavLink></li>
                        
                    </ul>
                </div>
                
            </div>
        </>
    );
}

export default Header;


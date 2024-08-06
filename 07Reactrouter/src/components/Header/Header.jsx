import {Link,NavLink} from "react-router-dom"
function Header(){
    return(
        <>
            <div className="flex justify-between w-full h-[7rem] p-2 m-0 border-b-2">
                <div className="w-[30%]  text-center text-3xl font-bold py-8"><Link to="#">Your Logo</Link></div>
                <div className="m-0 py-8">
                    <ul className="flex justify-evenly w-[40%]">
                        <li className="mx-8">
                            <NavLink to="/" className={({isActive})=>
                                {`${isActive ? "text-orange-700" : "text-gray-700"}`}
                                }>Home</NavLink></li>
                        <li className="mx-8">
                            <NavLink to="/About" className={({isActive})=>
                                {`${isActive? "text-red-900": "text-black"}`}
                                }>About</NavLink></li>
                        <li className="mx-8">
                            <NavLink to="/Contact" className={({isActive})=>
                                {`${isActive? "text-red-900": "text-black"}`}
                                }>Contact</NavLink></li>
                        <li className="mx-8">
                            <NavLink to="/Github" className={({isActive})=>
                                {`${isActive? "text-red-900": "text-black"}`}
                                }>GitHub</NavLink></li>
                    </ul>
                </div>
                <div className="w-[20%] flex justify-evenly p-2">
                    <button className="bg-white w-[5rem]  rounded-md h-[4rem]">Log In</button>
                    <button className="bg-red-600 w-[5rem] rounded-md h-[4rem] text-white">Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default Header;

// className={({isActive})=>{`${isActive? "": ""}`}}
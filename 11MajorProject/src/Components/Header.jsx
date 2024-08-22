import React from 'react'

function Header() {
  return (
    <>
        <div className="flex justify-around  w-full h-[7rem] p-4 border-b-2">
            <div className="w-[40%] "> <h1 className="text-3xl text-center pt-4">Alumni Hub</h1> </div>
            <div className="w-[60%] ">
                <ul className="flex list-none justify-evenly pt-4">
                    <li>Home</li>
                    <li>Alumni NetWork</li>
                    <li> Chat</li>
                    <li> Profile</li>
                </ul>
            </div>
        </div>]
    </>
  )
}

export default Header
import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex justify-evenly  w-full h-[20rem] bg-red-500 pt-4 border-b-2">
                <div className="w-[30%] "> <h1 className="text-3xl text-center pt-4">Alumni Hub</h1> </div>
                <div className="w-[30%] text-2xl">
                    <ul className="">
                        <li className="pb-4">Home</li>
                        <li className="pb-4">Alumni NetWork</li>
                        <li className="pb-4"> Chat</li>
                        <li className="pb-4"> Profile</li>
                    </ul>
                </div>
                <div className="text-3xl">
                  <p className="pb-4 pt-8">Email: alumnihub@gmail.com</p>
                  <br/>
                  <p className="pb-4 ">phone: +91 xxxxx-xxxxx</p>
                </div>
            </div>
            <div className="text-center"><h1>Copyrights reserved 2024</h1></div>
        </>
      )
}

export default Footer
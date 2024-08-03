import { useState } from "react";
import ColorButton from "./components/ColorButton.jsx/";

function App() {
  const [color, setColor]= useState("black");
  const changeColor=(bgcolor)=>{
    setColor(bgcolor);
  }
  return (
    <>
      <div className="m-0 p-0 w-full h-screen flex flex-wrap justify-center" style={{backgroundColor:color}} >
        <div className=" flex justify-center fixed bottom-10 rounded-xl bg-white p-2">
          <ColorButton bgcolor="red" text="Red" textColor="white" changeColor={changeColor} ></ColorButton>
          <ColorButton bgcolor="blue" text="Blue" textColor="white" changeColor={changeColor} ></ColorButton>
          <ColorButton bgcolor="green" text="Green" textColor="white" changeColor={changeColor} ></ColorButton>
          <ColorButton bgcolor="olive" text="Olive" textColor="white" changeColor={changeColor} ></ColorButton>
          <ColorButton bgcolor="white" text="White" textColor="black" changeColor={changeColor} ></ColorButton>
          <ColorButton bgcolor="black" text="Black" textColor="white" changeColor={changeColor} ></ColorButton>
        </div>
      </div>
    </>
  )
}

export default App

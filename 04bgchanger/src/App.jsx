import { useState } from "react"
import Colorbutton from "./components/colorbutton";

function App() {
  const [color,setColor]= useState("black");

  return (
    <div className="w-[30rem] h-[30rem]" style={{backgroundColor: color}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="">
      <Colorbutton color="red" text="Red" textcolor="white"></Colorbutton>
      <Colorbutton color="black" text="Black" textcolor="white"></Colorbutton>
      <Colorbutton color="white" text="White" textcolor="black"></Colorbutton>
      </div>

    </div>
  )
}

export default App

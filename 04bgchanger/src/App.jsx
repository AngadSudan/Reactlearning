import { useState } from "react"
import Colorbutton from "./components/colorbutton";

function App() {
  const [color,setColor]= useState("olive");

  return (
    <div className="w-full h-screen p-8" style={{backgroundColor: color}}>
      <div className="flex justify-center gap-2">
      <Colorbutton color="red" text="Red" textcolor="white"></Colorbutton>
      <Colorbutton color="black" text="Black" textcolor="white"></Colorbutton>
      <Colorbutton color="white" text="White" textcolor="black"></Colorbutton>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
function App() {
    // let counter=15;
    const [counter, setCounter]= useState(0);
    const add=()=>{
      console.log("counter value to", Math.random());
      if(counter<20){
        setCounter(counter+1);
      }
    }
    const subtract=()=>{
      console.log("counter value is", Math.random()); 
      if(counter>=1){
        setCounter(counter-1);
      }
    }
  return (
    <>
      <h1>Counter using React</h1>
      <h2>counter value is {counter}</h2>
      <button onClick={add}> Increment</button>
      <button onClick={subtract}>Decrement</button>
    </>
  )
}

export default App;
// function App() {
//   // const counter=0;  
//   const [counter, setcounter]= useState(0);
//   const add=()=>{
//     console.log("Value updated to ", counter);
//     setcounter(counter+1)
//   }
//   const minue=()=>{
//     console.log("value up");
//     setcounter(counter-1);
//   }
//   return (
//     <>
//       <h1>Counter Using React</h1>
//       <h2> Counter value is {counter}</h2>
//       <button onClick={add}>Add</button>
//       <br />
//       <button onClick={minus}>Minus</button>
//     </>
//   )
// }

// export default App

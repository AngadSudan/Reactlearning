import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, countlength]= useState(8);
  const [num, numallowed]= useState(false);
  const [character, characterallowed]= useState(false);
  const [password, setPassword]= useState("");
  let passwordRef= useRef(null);
  const copytoClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password]);
  const generatePassword=useCallback(()=>{
    let pass="";
    let string="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if(num) string+="1234567890";
    if(character) string+="!@#$%^&*()_+";


    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*string.length + 1);
      pass+=string.charAt(char);
    }
    setPassword(pass);
  },[length,num,character,setPassword]);

  useEffect(() => { generatePassword()},[length,num,character, generatePassword]);
  return (
    <>
    <div className=" p-4 h-[100%] w-[100%] bg-yellow-500 ">  
      <h1 className='text-start'>Password Generator</h1>
      <h2>Want a new Password, off you go</h2>
      <div className='flex p-4' >
        <input className='bg-white text-black h-[2.5rem] w-[70%]' 
        type="text" value={password} readOnly placeholder='Password' useRef={passwordRef}></input>
        <button 
        onClick={copytoClipboard}
        className="w-[20%] rounded-none bg-blue-600 p-0">Copy</button>
      </div>
      <div className='flex justify-evenly '>
        <input type='range' min={8} max={50} value={length} className="cursor-pointer "onChange={(e)=>{countlength(e.target.value)}}></input>
        <label>length:{length}</label>
        <div>
          <input 
          type="checkbox"
          defaultValue={numallowed}
          id="numberInput"
          onChange={()=>{numallowed((prev)=>!prev);}}
          /><label htmlFor='numberInput'>Numbers</label>
        </div>
      <div>
        <input 
          type="checkbox"
          defaultValue={characterallowed}
          id="charInput"
          onChange={()=>{characterallowed((prev)=>!prev);}}
          /><label htmlFor='charInput'>Character</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

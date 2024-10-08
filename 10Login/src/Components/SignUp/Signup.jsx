import React,{useState} from 'react'
function Signup() {
  const [username,setuser]= useState('');
  const [password,setpassword]= useState('');
  const [message,setmessage]=useState('');
  const updateuser=(e)=>{
      setuser(e.target.value);
  }
  const updatepassword=(e)=>{
      setpassword(e.target.value);
  }
  const checkuser=(e)=>{
      e.preventDefault();
      if(!localStorage.getItem(username)){
        localStorage.setItem(username,password)
        setmessage("Signup Successful, move to Login")
      }else{
        setmessage('error in sign in')
        alert("useralready exists, kindly login")
    }
  }
  return (
    <div className='flex h-screen w-[100%] justify-center align-middle pt-24  '>
        <form  onSubmit={checkuser} className='flex flex-col h-[25rem] w-[25rem] p-16  border-slate-300 border-2 ' >
            <span> <h1 className='text-center text-2xl mb-16'>Create Your Account</h1></span>
            <input type="text" value={username} onChange={updateuser} placeholder='email' className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <input type="password" value={password} onChange={updatepassword} placeholder='password' className='h-[15%] rounded-sm mb-8 border-slate-400 border-2' />
            <button type='submit'className='rounded-md bg-black text-white h-[3rem] '>Sign Up</button>
            <span>{message}</span>
        </form>
    </div>
  )
}

export default Signup
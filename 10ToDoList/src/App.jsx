import {ToDoProvider,TodoContext,useTodo} from "./Contexts/index.js"
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos,setTodos]= useState([]);

  const addToDo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }

  const update=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }

  const toggleToDo=(id)=>{
    setTodos((prev)=>prev.map((prevToDo)=>prevToDo.id===id? {...prevToDo, completed:!prevToDo.completed} :prevToDo))
  }

  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <ToDoProvider value={{addToDo,deleteTodo,Todos,update,toggleToDo}}>
      <div className='' ><h1>To Do Manager</h1></div>
    </ToDoProvider>
  )
}

export default App

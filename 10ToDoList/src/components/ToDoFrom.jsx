import { useState } from "react";
import { useTodo } from "../Contexts";

function ToDoForm(){
    const [todo, setTodo]= useState("")
    const {addToDo}= useTodo()
    const add=(e)=>{
        e.preventDefault();
        if(!todo ) return 

        addToDo({todo,completed:false})
        setTodo("")

    }
    return (
        <>
            <form onSubmit={add}>
                <input type="text" placeholder="write Task " className="" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
                <button type="submit" className="">Add</button>
            </form>
        </>
    )
}
export default ToDoForm;
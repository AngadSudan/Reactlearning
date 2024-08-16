import { createContext,useContext } from "react";

export const TodoContext= createContext({
    Todos:[
        {
            id:1,
            todo:"ToDo message",
            completed:false
        }
    ],
    addToDo: (todo)=>{},
    update: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleToDo: (id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const ToDoProvider= TodoContext.Provider;
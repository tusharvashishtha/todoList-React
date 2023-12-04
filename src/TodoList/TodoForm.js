import React, { useState } from "react";
import {toast } from 'react-toastify';


export default function TodoForm({addTodo}) {
    const [todoValue , setTodoValue] = useState(" ");

    function handleInputChange(e){
        setTodoValue(e.target.value)
    }

    function handleTodoFormSubmit(e){
        e.preventDefault();
        if(todoValue.trim() === ""){
            toast.error('Todo cannot be blank!', {});
            return;
        }
        const todoObj = {
            data : todoValue,
            id : Date.now(),
            isCompleted: false
        }
        toast.success('Todo Added', {});
        addTodo(todoObj)
        setTodoValue(" ");
    
    }

  return(
    <>   
    <h3 className="mainDiv-h3">Todo-List</h3>
   <form>
    <input type="text" name="todo" value={todoValue} onChange={handleInputChange}/>
    <button className="btn" onClick={handleTodoFormSubmit}>
    <span>Add</span>
    <span className="hover-text">Add task</span>
    </button>
  </form>

    
    </>
  );
}

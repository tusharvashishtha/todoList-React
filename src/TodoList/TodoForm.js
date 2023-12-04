import React, { useState } from "react";

export default function TodoForm({addTodo}) {
    const [todoValue , setTodoValue] = useState(" ");

    function handleInputChange(e){
        setTodoValue(e.target.value)
    }

    function handleTodoFormSubmit(e){
        e.preventDefault();
        if(todoValue !== " "){
        const todoObj = {
            data : todoValue,
            id : Date.now(),
            isCompleted: false
        }
        addTodo(todoObj)
        setTodoValue(" ");
    }
    }

  return(
    <>
    <h3>Todo-List</h3>
   <form>
    <input type="text" name="todo" value={todoValue} onChange={handleInputChange}/>
    <button onClick={handleTodoFormSubmit}>Add</button>
  </form>
    </>
  );
}

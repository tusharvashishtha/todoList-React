import React, { useState } from "react";

export default function TodoForm({addTodo}) {
    const [todoValue , setTodoValue] = useState(" ");

    function handleInputChange(e){
        setTodoValue(e.target.value)
    }

    function handleTodoFormSubmit(e){
        e.preventDefault();
        addTodo(todoValue)
        setTodoValue(" ");
    }

  return(
   <form>
    <input type="text" name="todo" value={todoValue} onChange={handleInputChange}/>
    <button onClick={handleTodoFormSubmit}>Add</button>
  </form>
  );
}

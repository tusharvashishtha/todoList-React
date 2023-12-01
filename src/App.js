import TodoForm from "./TodoList/TodoForm";
import React ,{ useState } from "react";
import TodoDisplay from "./TodoList/TodoDisplay";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo){
    setTodoList((prevTodoList) => {
      return [...prevTodoList, todo]
  })
  }
  return (
    <>
      <TodoForm addTodo = {addTodo}/>
      <TodoDisplay todoList = {todoList}/>

    </>   
    );
}

export default App;

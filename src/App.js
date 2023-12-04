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
  function handleDelete(id){

    setTodoList((prev) =>{
      const newArr = prev.filter((todo)=>{
        return  todo.id !== id;
      })
      return newArr
    })
  } 

  function handleCompleteToggle(id){
    setTodoList((prev) => {
      const updatedArr = prev.map((todo) => {
        if(todo.id === id){
          return {...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      })
      return updatedArr; 
    })
  }


  return (
    <>
      <TodoForm addTodo = {addTodo}/>
      <TodoDisplay 
      todoList = {todoList}
      handleDelete={handleDelete}
      handleCompleteToggle = {handleCompleteToggle}
      />

    </>   
    );
}

export default App;

import TodoForm from "./TodoList/TodoForm";
import React ,{ useState } from "react";
import TodoDisplay from "./TodoList/TodoDisplay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.info('Todo Deleted Successfully!', {})
  } 

  function handleCompleteToggle(id){
    let todoState;
    setTodoList((prev) => {
      const updatedArr = prev.map((todo) => {
        if(todo.id === id){
          todoState = !todo.isCompleted 
          return {...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      })
      return updatedArr; 
    })
    toast.info(`Task ${todoState ? 'Completed' : 'incomplete'}`, {})
  }


  return (
    <>
    <div className="mainDiv"> 
      <TodoForm addTodo = {addTodo}/>
      <TodoDisplay 
      todoList = {todoList}
      handleDelete={handleDelete}
      handleCompleteToggle = {handleCompleteToggle}
      />
      
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
    </>   
    );
}

export default App;

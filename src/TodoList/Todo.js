import React from 'react'

export default function Todo({todo, handleDelete, handleCompleteToggle}) {
  const {isCompleted, data, id} = todo;
  return (
      <div style={isCompleted ? {textDecoration: 'line-through'} : {}}>{data}
      <button onClick={()=>{handleCompleteToggle(id)}}>Complete</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
  
  ) 
}

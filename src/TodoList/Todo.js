import React from 'react'
import { FaCircleCheck  ,
  FaRegTrashCan   
       } from "react-icons/fa6";

export default function Todo({todo, handleDelete, handleCompleteToggle}) {
  const {isCompleted, data, id} = todo;
  return (
 <div className='taskDiv-Container'>
     <div className='taskDiv' style={isCompleted ? {textDecoration: 'line-through'} : {}}>{data}</div>
    <div className='icons'>
     <FaCircleCheck  onClick={()=>{handleCompleteToggle(id)}}/>
      <FaRegTrashCan  onClick={() => handleDelete(id)}/>
    </div>
</div>
  ) 
}

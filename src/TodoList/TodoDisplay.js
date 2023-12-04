import React , {useState} from 'react';
import Todo from './Todo';

export default function TodoDisplay({todoList, handleDelete, handleCompleteToggle}){
    return (
        <>
        {todoList.map((todo, index) => {
            return (<Todo  
            todo={todo}
            key={todo.id}
            handleDelete = {handleDelete}
            handleCompleteToggle={handleCompleteToggle}
            />)
    } )}
        </>
    )
}
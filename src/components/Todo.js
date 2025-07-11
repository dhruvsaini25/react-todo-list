import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <div className="todo-text">
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""} `}>{task.task}</p>
      </div>
      <div className="todo-actions">
        <FontAwesomeIcon 
          icon={faPenToSquare} 
          className="edit-icon" 
          onClick={()=> editTodo(task.id)}/>
        <FontAwesomeIcon 
          icon={faTrash} 
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
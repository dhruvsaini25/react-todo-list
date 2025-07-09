import React, {useState} from 'react'
import { AnimatedPlaceholderInput } from './AnimatedPlaceholderInput';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

  export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue]=useState(task.task)
    const handleSubmit = e =>{
      e.preventDefault();
      editTodo(value, task.id)
      setValue("")
    }
    return (
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update Task'
          onChange={(e)=>setValue(e.target.value)}/>
          <button type='submit' className='todo-btn'>✓</button>
      </form>
    )
  }

import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue]=useState("")
  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value)
    setValue("")
    // console.log(value)
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is on your mind today?'
        onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-submit'>+</button>
    </form>
  )
}

  import React, {useState} from 'react'
import { AnimatedPlaceholderInput } from './AnimatedPlaceholderInput';

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
        <AnimatedPlaceholderInput
          value={value}
          onChange={(e)=> setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          className='animatedplaceholder'
          />
          {/* <input type="text" className='todo-input' value={value} placeholder='What is on your mind today?' */}
          {/* onChange={(e)=>setValue(e.target.value)}/> */}
          <button type='submit' className='todo-btn'>+</button>
      </form>
    )
  }

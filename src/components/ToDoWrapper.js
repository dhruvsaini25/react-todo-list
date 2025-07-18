
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos([...todos, {
      id:uuidv4(), 
      task:todo, 
      completed:false, 
      isediting:false
    }])
    console.log(todos)
  }
  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, 
      completed: !todo.completed} : todo))
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo=> todo.id!==id))
  }
  const editTodo = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, 
      isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task,id) =>{
    setTodos(todos.map(todo=>todo.id===id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo} />
        )
        
      ))}
      <footer className='footer'>
        <a href="https://github.com/dhruvsaini25" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </footer>
    </div>
  )
}
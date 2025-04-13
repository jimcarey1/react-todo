import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, handleToggleTodo, handleDeleteTodo}) => {
  return (
    <ul>
    {todos.map((todo)=>(
     <Todo key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} handleDeletTodo={handleDeleteTodo}/>
    ))}
    </ul>
  )
}

export default TodoList
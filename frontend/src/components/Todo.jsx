import React from 'react'

const Todo = ({todo}) => {
  return (
    <div key={todo.id} className="flex gap-2">
    <input type="checkbox" value={todo.isCompleted} onChange={()=>handleToggleTodo(todo.id)}/>
    <li key={todo.id} className={todo.isCompleted ? 'line-through' : ''}>{todo.title}</li>
    <button className="bg-red-900" onClick={()=>handleDeletTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
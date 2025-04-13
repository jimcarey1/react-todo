import React, { useEffect } from 'react'

import NewTodoForm from '../components/NewTodoForm'
import TodoList from '../components/TodoList';

const HomePage = ({handleAddTodo, todoText, setTodoText, todos, handleToggleTodo, handleDeleteTodo}) => {
  useEffect(()=>{
    const authData = localStorage.getItem('jwt');
    if(!authData){
      window.location.href = '/login'
    }
    console.log(authData)
  },[])
  return (
    <div>
      <h1>Todo App</h1>
      <NewTodoForm handleAddTodo={handleAddTodo} todoText={todoText} setTodoText={setTodoText}/>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>
  </div>
  )
}

export default HomePage
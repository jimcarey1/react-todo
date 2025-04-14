import React, { useEffect } from 'react'

import NewTodoForm from '../components/NewTodoForm'
import TodoList from '../components/TodoList';
import getTodos from '../services/Todo';
import checkTokenExpiry from '../utils/jwt';
import { useAuth } from '../hooks/AuthProvider';

const HomePage = ({handleAddTodo, todoText, setTodoText, todos, handleToggleTodo, handleDeleteTodo}) => {
  const {logOut} = useAuth();
  useEffect(()=>{
    let authData = localStorage.getItem('jwt');
    if(!authData){
      window.location.href = '/login'
    }else{
      if(checkTokenExpiry()){
        const refresh = JSON.parse(authData).refresh;
        fetch('http://localhost:8000/api/token/refresh/',{
          method:'POST',
          headers: {
            'Content-Type':'application/json',
          },
          body: JSON.stringify({refresh:refresh})
        })
        .then((response)=>response.json())
        .then((data)=>{
          if(data.access){
            authData = {access:data.access, refresh:refresh}
            localStorage.clear();
            localStorage.setItem('jwt', JSON.stringify(authData));
          }
        })
      }
    }
  },[])

  useEffect(()=>{
    const todos = async ()=>{
      await getTodos();
    }
    todos();
  },[])

  return (
    <div>
      <h1>Todo App</h1>
      <NewTodoForm handleAddTodo={handleAddTodo} todoText={todoText} setTodoText={setTodoText}/>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo}/>
      <button onClick={logOut}>Logout</button>
  </div>
  )
}

export default HomePage
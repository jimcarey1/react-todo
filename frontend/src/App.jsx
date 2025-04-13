import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e)=>{
    e.preventDefault();
    if(todoText){
      setTodos((prev)=>{
       return [...prev, {id:crypto.randomUUID() ,title: todoText, isCompleted:false}]
      })
      setTodoText('');
    }
  }

  const handleToggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  

  const handleDeleteTodo = (id)=>{
    setTodos((prev)=>prev.filter(todo=>todo.id !== id))
  }

  return (
    <div>
      <Routes>
        <Route path="/" 
        element=
        {<HomePage 
        handleAddTodo={handleAddTodo} 
        handleDeleteTodo={handleAddTodo} 
        handleToggleTodo={handleToggleTodo} 
        todos={todos} 
        todoText = {todoText} 
        setTodoText={setTodoText}/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App

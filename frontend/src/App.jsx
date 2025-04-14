import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from './utils/PrivateRoute';
import getTodos from "./services/Todo";

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const todos = async ()=>{
      const data = await getTodos();
      setTodos(data);
    }
    todos();
  },[])

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
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" 
              element=
              {<HomePage 
              handleAddTodo={handleAddTodo} 
              handleDeleteTodo={handleDeleteTodo} 
              handleToggleTodo={handleToggleTodo} 
              todos={todos} 
              todoText = {todoText} 
              setTodoText={setTodoText}/>} 
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App

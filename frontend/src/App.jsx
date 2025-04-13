import { useEffect, useState } from "react"

import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e)=>{
    e.preventDefault();
    if(todoText){
      setTodos((prev)=>{
       return [...prev, {id:crypto.randomUUID() ,title: todoText, isCompleted:false}]
      })}
    setTodoText('');
  }

  const handleToggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  

  const handleDeletTodo = (id)=>{
    setTodos((prev)=>prev.filter(todo=>todo.id !== id))
  }

  return (
    <div className="m-10 flex flex-col gap-5">
      <h1 className="text-2xl">Todo App</h1>
      <NewTodoForm handleAddTodo={handleAddTodo} todoText={todoText} setTodoText={setTodoText}/>
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo}/>
    </div>
  )
}

export default App

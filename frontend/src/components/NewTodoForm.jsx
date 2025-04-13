import React from 'react'

const NewTodoForm = ({handleAddTodo, todoText, setTodoText}) => {
  return (
    <>
    <input type="text" className="w-100 px-5" placeholder="add todo..." value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
    <button onClick={handleAddTodo} className="">Add Todo</button>
    </>
  )
}

export default NewTodoForm
import React, { useState } from 'react'
import FormTodo from '../form'

const Todo = () => {

  const [todos, setTodos] = useState([]);
  return (

    <div>
        <FormTodo todos = {todos} setTodos = {setTodos}/>
    </div>
  )
}

export default Todo
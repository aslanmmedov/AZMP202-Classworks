import React, { useState } from 'react'
import './index.css'
const FormTodo = ({ todos, setTodos }) => {
    const [input, setInput] = useState("");
    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input) {
            const addTodo = {
                id: Date.now(),
                name: input,
                createdAt: new Date(),
                isCompleted: false
            }
            console.log(todos)
            setTodos([...todos, addTodo]);
            setInput("");
        }

    }
    const handleDelete = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }
    const isComp = false;
    return (

        <div className='container'>
            <div className="todo-form-cont">
                <h1>Todo App</h1>
                <form className='todo-form' onSubmit={handleAddTodo}>
                    <input type="text" id="todo-text" placeholder="enter to do" value = {input} onChange={
                        (e) => setInput(e.target.value)
                    } />
                    <input type="submit" />
                </form>
            </div>
            <div className="buttons">
                <button className='btn btn-all' onclick = {() => {setTodos([...todos])}}>All todos</button>
                <button className='btn btn-completed'>Completed todos</button>
                <button className='btn btn-pending'>Pending todos</button>
                <button className='btn btn-clear' onClick = {() => {setTodos("")}}>Clear All</button>
            </div>

            <div className="list">
                <ul>
                    {todos && todos.map((todo) =>
                        <li key="todo.id" className='todo-list-item'>
                            <div className="list-item-head">
                                <input type="checkbox" />
                                <p>{todo.name}</p>
                            </div>
                            <div className="btns">
                                <button className="btn delete" onClick={() => handleDelete(todo.id)}>Delete</button>
                                <button className="btn edit">Edit</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default FormTodo


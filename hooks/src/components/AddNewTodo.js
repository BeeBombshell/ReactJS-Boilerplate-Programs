import React, { useState } from "react";

const AddNewTodo = ({ addTodo }) => {
    const [todos, setTodos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>To Do</label>
            <input type='text' value={todos} id='todo' onChange={(e) => setTodos(e.target.value)}></input>
            <input type='submit'></input>
        </form>
    )
}

export default AddNewTodo;

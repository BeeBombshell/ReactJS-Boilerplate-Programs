import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const TodoList = () => {

    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const [todos, setTodos] = useState([
        { text: "Go for walk", id: 1 },
        { text: "Do React", id: 2 }
    ])

    const [singleTodo, setSingleTodo] = useState('')

    const addSingleTodo = (newTodo) => {
        setSingleTodo(newTodo)
    }

    const addNewTodo = (value) => {
        setTodos([
            ...todos,
            { text: value, id: Math.random() }
        ])
        setSingleTodo('')
    }

    return (
        <div style={{ background: theme.background, color: theme.text }}>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addNewTodo(singleTodo)
                }}>
                    <input type='text' placeholder="Add a new Todo" value={singleTodo} onChange={(e) => { addSingleTodo(e.target.value) }}></input>
                </form>
            </div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )
                })}
            </ul>
            <button onClick={changeTheme}>Change The Theme</button>
        </div>
    )
}

export default TodoList;
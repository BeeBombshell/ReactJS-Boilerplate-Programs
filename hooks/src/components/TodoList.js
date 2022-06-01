import React, { useState, useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay Bills', id: 1 },
        { text: 'Do your Homework', id: 2 },
        { text: 'Feed the dog', id: 3 }
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text: text, id: Math.random() }
        ])
    }

    // Everytime the component renders
    useEffect(() => {
        console.log('use effect', todos);
    }, [todos]);

    useEffect(() => {
        console.log('use effect', count);
    }, [todos]);


    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo={addTodo} />
            <button onClick={() => setCount(count + 1)}>Score: {count}</button>
        </div>
    )
}

export default TodoList;
import { useState } from "react";
import TodoTable from "./TodoTable";

const TodoList = () => {
    // states
    const [formState, setFormState] = useState({
        desc: "",
        date: ""
    });
    const [todos, setTodos] = useState([]);

    // control the input value
    const handleChange = (event) => setDesc(event.target.value);

    // add a new todo-item to the todos-list
    const addTodo = () => {
        // validate that description value exists, alert if not. 
        if (!desc) return alert("Can't add empty items to the list!");
        // add desc to list
        setTodos([...todos, desc]);
        // clear input
        setDesc("");
    };

    // delete item from the todoslist
    const deleteTodo = (indexToRemove) => {
        setTodos([...todos].filter((todo, index) => index !== indexToRemove));
    }

    return (
        <>
            <input type="text" placeholder="Description" onChange={handleChange} value={desc} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoList;
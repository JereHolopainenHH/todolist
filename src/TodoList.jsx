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
    const handleChange = (event) => {
        // Destructure the name and value from the event target (the input element)
        const { name, value } = event.target;
        // Update the state based on the input field that triggered the event 
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // add a new todo-item to the todos-list
    const addTodo = () => {
        // validate that description value exists, alert if not. 
        if (!formState.desc || !formState.date) return alert("Both Description and Date required!");

        // create new todo-object with the formState-data
        const todo = {
            desc: formState.desc,
            date: formState.date
        }
        // add new todo-item to todos-list
        setTodos(prevState => [...prevState, todo]);
        // clear inputs
        setFormState({ desc: "", date: "" });
    };

    // delete item from the todos-list
    const deleteTodo = (indexToRemove) => {
        setTodos([...todos].filter((todo, index) => index !== indexToRemove));
    }

    return (
        <>
            <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={formState.desc} />
            <input type="date" name="date" onChange={handleChange} value={formState.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoList;
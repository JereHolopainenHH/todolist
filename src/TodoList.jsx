import { useState } from "react";
import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

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
    const addTodo = (event) => {
        // prevent the default form submission when clicking the submit-button
        event.preventDefault();

        // validate that description value exists, alert if not. 
        if (!formState.desc || !formState.date) return alert("Invalid description or date! Make sure that both fields are filled and that the date has valid value");

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
            <TodoForm handleChange={handleChange} addTodo={addTodo} formState={formState} />
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoList;
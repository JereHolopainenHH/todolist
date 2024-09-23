import { useState } from "react";
import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

const TodoList = () => {
    // get current date that can be used as a default value for the input date element. 
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    }

    // states
    const initialFormState = { desc: "", date: getCurrentDate() };
    const [formState, setFormState] = useState(initialFormState);
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

        // validate that description and date values exist and are valid, alert if not. 
        if (!formState.desc || !formState.date) return alert("Invalid description or date! Make sure that both fields are filled.");

        // create new todo-object with the formState-data
        const todo = {
            desc: formState.desc,
            date: formState.date
        }

        // add new todo-item to todos-list
        setTodos(prevState => [...prevState, todo]);
        // clear inputs
        setFormState(initialFormState);
    };

    // delete item from the todos-list
    const deleteTodo = (indexToRemove) => {
        setTodos(todos.filter((todo, index) => index !== indexToRemove));
    }

    return (
        <>
            <TodoForm handleChange={handleChange} addTodo={addTodo} formState={formState} />
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>
    );
}

export default TodoList;
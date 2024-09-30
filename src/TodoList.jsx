// import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";
import { AgGridReact } from "ag-grid-react";
import { useRef, useState } from 'react'


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

const TodoList = () => {
    // get current date that can be used as a default value for the input date element. 
    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    }

    // states
    const initialFormState = { desc: "", priority: "", date: getCurrentDate() };
    const [formState, setFormState] = useState(initialFormState);
    const [todos, setTodos] = useState([]);
    /* const [columnDefs, setColumnDefs] = useState([
        { field: 'desc' },
        { field: 'priority' },
        { field: 'date' }
    ]); */
    const columns = [
        { field: "desc", sortable: true, filter: true },
        {
            field: "priority", sortable: true, filter: true,
            cellStyle: params => params.value === "High" || params.value === "high" ? { color: 'red' } : { color: 'black' }
        },
        { field: "date", sortable: true, filter: true }
    ];

    // refs
    const gridRef = useRef();


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
        if (!formState.desc || !formState.date || !formState.priority) return alert("Invalid form values! Make sure that all fields are filled.");

        // create new todo-object with the formState-data
        const todo = {
            desc: formState.desc,
            priority: formState.priority,
            date: formState.date
        }

        // add new todo-item to todos-list
        setTodos(prevState => [...prevState, todo]);
        // clear inputs
        setFormState(initialFormState);
    };

    // delete item from the todos-list
    const handleDelete = (event) => {
        event.preventDefault();
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    }

    return (
        <>
            <TodoForm handleChange={handleChange} addTodo={addTodo} handleDelete={handleDelete} formState={formState} />
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columns}
                    rowSelection="single"
                />
            </div>
        </>
    );
}

export default TodoList;
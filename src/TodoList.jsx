// import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";
import { AgGridReact } from "ag-grid-react";
import { useRef, useState } from 'react';

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
    const [todos, setTodos] = useState([
        { desc: 'Tehtävä 1', priority: 'High', date: '2024-01-01' },
        { desc: 'Tehtävä 2', priority: 'Low', date: '2024-01-02' },
        { desc: 'Tehtävä 3', priority: 'Medium', date: '2024-01-03' },
        { desc: 'Tehtävä 4', priority: 'HIGH', date: '2024-01-04' },
        { desc: 'Tehtävä 5', priority: 'medium', date: '2024-01-05' },
    ]);

    // ag-grid priority order config
    const priorityOrder = {
        high: 1,
        medium: 2,
        low: 3
    };

    // column defs
    const [columnDefs, setColumnDefs] = useState([
        { field: 'desc', filter: true, floatingFilter: true },
        {
            field: 'priority',
            filter: true,
            floatingFilter: true,
            comparator: (a, b) => priorityOrder[a.toLowerCase()] - priorityOrder[b.toLowerCase()],
            cellStyle: params => {
                const value = params.value.toLowerCase();
                return value === "high" ? { color: "red" } : value === "medium" ? { color: "orange" } : null;
            }
        },
        { field: 'date', filter: true, floatingFilter: true }
    ]);

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
            <div className="ag-theme-material" style={{ width: 700, height: 500, margin: "auto" }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowSelection={{ mode: "singleRow" }}
                    animateRows={true}
                    defaultColDef={{
                        sortable: true, // Ota lajittelu käyttöön
                        filter: true, // Ota suodatus käyttöön
                    }}
                />
            </div>
        </>
    );
}

export default TodoList;
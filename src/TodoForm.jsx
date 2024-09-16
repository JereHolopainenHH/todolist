const TodoForm = ({ handleChange, addTodo, formState }) => {
    return (
        <form onSubmit={addTodo}>
            <label htmlFor="desc">
                Description: <input type="text" name="desc" id="desc" placeholder="Description" onChange={handleChange} value={formState.desc} />
            </label>
            <label htmlFor="date">
                Date: <input type="date" name="date" id="date" onChange={handleChange} value={formState.date} />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;
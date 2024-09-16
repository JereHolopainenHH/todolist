const TodoForm = ({ handleChange, addTodo, formState }) => {
    return (
        <form action="#">
            <label htmlFor="desc">
                Description: <input type="text" name="desc" id="date" placeholder="Description" onChange={handleChange} value={formState.desc} />
            </label>
            <label htmlFor="date">
                Date: <input type="date" name="date" id="date" onChange={handleChange} value={formState.date} />
            </label>
            <button type="submit" onClick={addTodo}>Add</button>
        </form>
    )
}

export default TodoForm;
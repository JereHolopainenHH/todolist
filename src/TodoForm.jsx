const TodoForm = ({ handleChange, addTodo, handleDelete, formState }) => {
    return (
        <form>
            <fieldset>
                <legend>Add todo</legend>
                <label htmlFor="desc">
                    Description: <input type="text" name="desc" id="desc" placeholder="Description" onChange={handleChange} value={formState.desc} />
                </label>
                <label htmlFor="priority">
                    Priority: <input type="text" name="priority" id="priority" placeholder="Priority" onChange={handleChange} value={formState.priority} />
                </label>
                <label htmlFor="date">
                    Date: <input type="date" name="date" id="date" onChange={handleChange} value={formState.date} />
                </label>
                <button onClick={addTodo}>Add</button>
                <button onClick={handleDelete}>Delete</button>
            </fieldset>
        </form>
    )
}

export default TodoForm;
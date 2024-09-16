const TodoTable = (props) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo}</td>
                            <td>
                                <button onClick={() => props.deleteTodo(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;
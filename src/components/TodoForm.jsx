import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TodoForm = ({ handleChange, addTodo, handleDelete, formState, selectedDate, handleSelectedDate }) => {

    return (
        <Stack
            mt={2}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
        >
            <TextField label="Description" type="text" name="desc" id="desc" onChange={handleChange} value={formState.desc} />
            <TextField label="Priority" type="text" name="priority" id="priority" onChange={handleChange} value={formState.priority} />
            <DatePicker 
                label="Date"
                value={selectedDate}
                onChange={date => handleSelectedDate(date)}
                format="DD-MM-YYYY"
            />
            <Button variant="contained" onClick={addTodo}>Add Todo</Button>
            <Button variant="contained" color="error" onClick={handleDelete} endIcon={<DeleteIcon />}>Delete</Button>
        </Stack>
    )
}

export default TodoForm;
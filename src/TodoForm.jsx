import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TodoForm = ({ handleChange, addTodo, handleDelete, formState }) => {
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
            <TextField label="Date" name="date" id="date" onChange={handleChange} value={formState.date} />
            <Button variant="contained" onClick={addTodo}>Add Todo</Button>
            <Button variant="contained" color="error" onClick={handleDelete} endIcon={<DeleteIcon />}>Delete</Button>
        </Stack>
    )
}

export default TodoForm;
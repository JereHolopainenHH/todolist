import TodoList from './TodoList'
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function App() {
  return (
    <Container maxWidth="xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography>
              Todos
            </Typography>
          </Toolbar>
        </AppBar>
        <TodoList />
      </LocalizationProvider>
    </Container>
  )
}

export default App

import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <Container maxWidth="xl">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
          <NavBar />
          <Outlet />
      </LocalizationProvider>
    </Container>
  )
}

export default App

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
function LinkTab(props) {
    return (
        <Tab
            component={Link}
            to={props.to}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}

export default function NavBar() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname === "/" ? 0 : 1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple navigation"
                role="navigation"
            >
                <LinkTab label="Home" to="/"/>
                <LinkTab label="Todos" to="/todolist"/>
            </Tabs>
        </>
    );
}
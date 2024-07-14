// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About the Developer</Button>
                <Button color="inherit" component={Link} to="/create">Create Recipe</Button>
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* Logo */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mr BIGU
                </Typography>
                <div>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack, Button, MenuItem, Tooltip } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddchartIcon from '@mui/icons-material/Addchart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useState } from 'react';

const NavBar = ({ handleLogout, isLoggedIn }) => {

    return (

    <AppBar position='static'>
        <Toolbar >
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Bake It Till You Make It
            </Typography>
                <Stack direction='row' spacing={1}>
                    <Tooltip title="Return To Home Page">
                        <Button variant='contained' color='secondary'><Link to="/"><HomeIcon /></Link></Button>
                    </Tooltip>
                {!isLoggedIn ? (
                    <Tooltip title="Log Into Your Account">
					    <Button variant='contained' color='secondary'><Link to="/signin"><LoginIcon /></Link></Button>
                    </Tooltip>
                ) : (
                    <Tooltip title="Log Out">
                        <Button variant='contained' color='secondary'><Link to="/" onClick={handleLogout}><ExitToAppIcon /></Link></Button>
                    </Tooltip>
                )}
                    <Tooltip title="Add A New Recipe">
                        <Button variant='contained' color='secondary'><Link to="/addrecipe"><AddBoxIcon /></Link></Button>
                    </Tooltip>
                    <Tooltip title="Track Recipe Changes">
                        <Button variant='contained' color='secondary'><Link to="/tracking"><AddchartIcon /></Link></Button>
                    </Tooltip>
                    <Tooltip title="Provide Recipe Feedback">
                        <Button variant='contained' color='secondary'><Link to="/feedback"><RateReviewIcon /></Link></Button>
                    </Tooltip>
                </Stack>
                    <MenuItem></MenuItem>
                
        </Toolbar>
    </AppBar>
	);
};

export default NavBar;
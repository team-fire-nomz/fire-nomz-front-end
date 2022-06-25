import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack, Button, Menu, MenuItem } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';

const NavBar = ({ handleLogout, isLoggedIn }) => {

    return (

    <AppBar  style={{backgroundColor: 'teal'}}position='static'>
        <Toolbar >
            <Typography style={{color:'Pink'}} variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Bake It Till You Make It
            </Typography>
                <Stack direction='row' spacing={1}>
                    <Button variant='text'><Link to="/">HOME</Link></Button>
                {!isLoggedIn ? (
					<Button variant='text'><Link to="/signin">SIGN IN/SIGN UP</Link></Button>
                ) : (
                    <Button variant='text'><Link to="/" onClick={handleLogout}>SIGN OUT</Link></Button>
                )}
                    <Button variant='text'><Link to="/addrecipe">NEW RECIPE</Link></Button>

                    <Button variant='text'><Link to="/recipe/:id">RECIPE TRACKING</Link></Button>

                    <Button variant='text'><Link to="/tracking">RECIPE TRACKING</Link></Button>
                    <Button variant='text'><Link to="/feedback">FEEDBACK</Link></Button>

                </Stack>
                
                    <MenuItem></MenuItem>
                
        </Toolbar>
    </AppBar>
	);
};

export default NavBar;
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

const NavBar = ({ handleLogout, isLoggedIn }) => {

    return (

    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
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
                    <Button variant='text'><Link to="/tracking">RECIPE TRACKING</Link></Button>
                </Stack>
        </Toolbar>
    </AppBar>
	);
};

export default NavBar;
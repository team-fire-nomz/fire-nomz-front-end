import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material"



const NavBar = ({ handleLogout, isLoggedIn }) => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Bake It Till You Make It
            </Typography>
                <Stack direction='row' spacing={2}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                    </ul>
                </Stack>
        </Toolbar>
    </AppBar>
);
};
export default NavBar;
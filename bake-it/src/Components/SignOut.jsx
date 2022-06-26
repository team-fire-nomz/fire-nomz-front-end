import { Navigate } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';


export const Logout = ({ setAuth, setToken, setUsername, isLoggedIn }) => {
  const setLogout = () => {
    setUsername("");
    setToken("");
    setAuth("", "");
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
        <Typography variant="h4" align="center">
        Are you sure you want to sign out?
	    </Typography>
      <Box testAlign="center">
        <Button onClick={() => setLogout()}>Yes, Sign me out</Button>
      </Box>
    </Box>
  );
};

export default Logout;
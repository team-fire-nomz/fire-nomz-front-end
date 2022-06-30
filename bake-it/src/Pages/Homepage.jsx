import React from "react";
import { Link } from "react-router-dom";
import RecipeList from "../Components/RecipeList";
import { Container, Box, Button, Typography } from "@mui/material";

function Homepage(props) {
  console.log(props);

  return (
    <Container sx={{ overflow: "scroll" }}>
      {!props.isLoggedIn && (
        <>
      
		<Box sx={{overflow: 'scroll',}}>
			<Typography sx={{color: 'white'}} variant="h4" align="center">
				Welcome fellow baker!
			</Typography>
			<Typography sx={{color: 'white'}} align="center">
				Please sign in to continue.
			</Typography>
          <Box textAlign="center">
            <Button
              size="large"
              variant="outlined"
              type="submit"
              component={Link}
              to="/signin"
            >
              Sign in
            </Button>
          </Box>
          <Box textAlign="center">
            <Button
              component={Link}
              to="/signup"
              size="small"
              variant="contained"
            >
              WANT TO JOIN OTHER BAKERS? PLEASE SIGN UP.
            </Button>
          </Box>
          </Box>
        </>
      )}
      <RecipeList {...props} />
    </Container>
  );
}

export default Homepage;

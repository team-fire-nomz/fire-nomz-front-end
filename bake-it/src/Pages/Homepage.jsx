import React from "react";
import { Link } from "react-router-dom";
import RecipeList from "../Components/RecipeList";
import { Container, Box, Button, Typography } from "@mui/material";
import AddRecipeBGImage from "./AddRecipeBGImage.jpeg";



function Homepage(props) {
  console.log(props);

  return (
    <Container sx={{ 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '90vh', 
      backgroundImage: `url(${AddRecipeBGImage})`, 
      backgroundRepeat: 'no-repeat', 
      overflow: "scroll" }}>
      {!props.isLoggedIn && (
        <>
			<Typography sx={{ color: 'white'}} variant="h4" align="center">
				Welcome Baker!
			</Typography>
			<Typography sx={{color: 'white'}} align="center">
				Please sign in.
			</Typography>
      <br />
          <Box textAlign="center">
            <Button
              size="large"
              variant="contained"
              type="submit"
              component={Link}
              to="/signin"
              sx={{ border: 1, borderRadius: 2}}
            >
              Sign in
            </Button>
          </Box>
          <br />
          <Box textAlign="center">
            <Button
              component={Link}
              to="/signup"
              size="small"
              variant="contained"
              sx={{ border: 1, borderRadius: 2}}
            >
              WANT TO JOIN OTHER BAKERS? PLEASE SIGN UP.
            </Button>
          </Box>
          
        </>
      )}
      <RecipeList {...props} />
    </Container>
  );
}

export default Homepage 

import React from "react";
import { Link } from "react-router-dom";
import RecipeList from "../Components/RecipeList";
import { Container, Box, Button, CardContent } from "@mui/material";
import MyRecipeList from "../Components/MyRecipeList";

function Homepage(props) {
  console.log(props);

    return (
      <div>
      {!props.isLoggedIn ? (
      <Container sx={{overflow: 'scroll'}}>
        <CardContent>
          <Box textAlign="center">
            <Button
                size="large" 
                variant="outlined" 
                type="submit"
                component={Link}
                to= "/signin"
                >Sign in
            </Button>
          </Box>
        </CardContent>
        <CardContent>
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
        </CardContent>
          <RecipeList {...props} />
      </Container>
      ):(
      <Container>
          <Box>
            <MyRecipeList {...props} />
          </Box>
      </Container>
      )}
    </div>
)}

export default Homepage 

import React from 'react';
import RecipeList from "../Components/RecipeList";
import { Container } from "@mui/material";

function Homepage (){

return (
   <Container
   sx={{overflow: 'scroll'}}>
      <RecipeList />
   </Container>
   )}

export default Homepage;
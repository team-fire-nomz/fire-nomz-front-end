import React from 'react';
import RecipeList from "../Components/RecipeList";
import { Container } from "@mui/material";



function Homepage (){



return (
   
   <Container
   sx={{
      backgroundColor: '#86b29b',
      overflow: 'scroll',

   }}>
  
   <RecipeList /> 
   </Container>
   
)
}



export default Homepage;
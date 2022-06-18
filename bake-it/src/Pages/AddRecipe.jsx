import React from 'react';
import Recipe from "../Components/Recipe";
import Ingredients from "../Components/Ingredients";
import { Container, Button } from "@mui/material";

function AddRecipe (){
   

return (

    <Container>
     <Ingredients />
    <Recipe />
    <Button
        variant="contained"
        type="submit"
        size="small"
        >Add Recipe</Button>
    </Container>
)
}

export default AddRecipe;
import React from "react";
import { Container, Button, Box } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from './AddRecipe.module.css';

    
    function AddRecipe (props){
        const [enteredIngredients, setEnteredIngredients] = useState('')
        const [enteredRecipe, setEnteredRecipe] = useState('')
        const [enteredTitle, setEnteredTitle] = useState('')
        console.log("Ask",props)
    
        function submitHandler(event){
            event.preventDefault();
    
            axios
            .post(
                "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
                {
                    "title": enteredTitle,
                    "ingredients": enteredIngredients,
                    "recipe": enteredRecipe

                },
            {
                headers: { Authorization: `Token ${props.token}` },
            }
            )
            .then((res) => {
            console.log(res);
            });
        }
        const handleChange = (inputType, event) => {
            if (inputType === 'title') {
                setEnteredTitle(event.target.value);
            }
            if (inputType === 'ingredients') {
                setEnteredIngredients(event.target.value);
            }
            if (inputType === 'recipe') {
                setEnteredRecipe(event.target.value);
        }
        }

return props.isLoggedIn? (

    <Container>
        <Box 
            className={classes.form}
            component="form"
            onSubmit={submitHandler} >
        <Box>
        <label htmlFor="ingredients">Ingredients</label>
            <textarea
            id="description"
            required 
            rows='10'
            onChange={(e) => handleChange('ingredients', e)}
            ></textarea>
        </Box>
        </Box>
        <Box 
        variant="form">
        <label htmlFor="title">Recipe Name </label>
            <input 
            type="text" 
            required 
            id="title" 
            onChange={(e) => handleChange('title', e)}
            />
    </Box>
    <Box>
        <label htmlFor="recipe">Description </label>
            <textarea
            id="description"
            required 
            rows='12'
            ></textarea>
    </Box>
        <Button
            variant="contained"
            type="submit"
            size="small"
            disabled={!props.isLoggedIn}
            >
            Add Recipe
        </Button>
    </Container>
) : ( <Button 
        variant="text" 
        component={Link} 
        className={classes.action} 
        margin="normal"
        to="/signup"
        >
        Want to join other bakers near you? Please create an account.
        </Button>) 
}


export default AddRecipe;
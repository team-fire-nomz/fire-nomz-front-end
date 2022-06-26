import React from "react";
import { Grid, Button, Box } from "@mui/material";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function AddRecipe(props) {
    console.log(props)
    const [enteredIngredients, setEnteredIngredients] = useState("");
    const [enteredRecipe, setEnteredRecipe] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredVersion, setEnteredVersion] = useState("");
    const [isEntered, setIsEntered] = useState(false);

    if (!props.isLoggedIn) {
    return <Navigate to="/signin" replace={true} />;
    }
    const submitHandler = (event) => {
        console.log("adding recipe");
    event.preventDefault();
    
    const recipeData ={
        title: enteredTitle,
        version_number: enteredVersion,
        ingredients: enteredIngredients,
        recipe_steps: enteredRecipe,
        }
        console.log("recipeData", recipeData)
    axios
        .post(
        "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
        recipeData,
        {
        headers: { Authorization: `Token ${props.token}` },
        })
        .then((res) => {
        console.log(res);
        setIsEntered(true);

        })
    }
    const handleChange = (inputType, event) => {
    if (inputType === "title") {
        setEnteredTitle(event.target.value);
    }
    if (inputType === "version_number") {
        setEnteredVersion(event.target.value);
    }
    if (inputType === "ingredients") {
        setEnteredIngredients(event.target.value);
    }
    if (inputType === "recipe") {
        setEnteredRecipe(event.target.value);
    }
    if (isEntered) {
        return <Navigate to="/signin" />;
    }
    };

    return (
    <Grid
        container
        sx={{
            backgroundColor: '#e9d79e',
            overflow: 'scroll',
        }}
        spacing={0}
        padding={0.5}
        direction="column"
        alignItems="center"
        justifyContent="Center"
        style={{ minHeight: "75vh" }}
    >
        <Box
            className="HERE!" 
            component="form" 
            onSubmit={submitHandler}>
        <div>
            <label htmlFor="title"></label>
            <input
            type="text"
            required
            placeholder="TITLE:"
            id="title"
            value={props.title}
            onChange={(e) => handleChange("title", e)}
            />
        </div>
        <div>
            <label htmlFor="version"></label>
            <input
            type="text"
            required
            placeholder="VERSION:"
            id="version"
            value={props.version_number}
            onChange={(e) => handleChange("version_number", e)}
            />
        </div>
        <div>
            <label htmlFor="ingredients"></label>
            <textarea
            id="description"
            required
            placeholder="Ingredients"
            rows="12"
            value={props.ingredients}
            onChange={(e) => handleChange("ingredients", e)}
            ></textarea>
        </div>
        <div>
            <label spacing={0} htmlFor="recipe"></label>
            <textarea
            id="description"
            required
            placeholder="Recipe"
            rows="12"
            value={props.recipe_steps}
            onChange={(e) => handleChange("recipe", e)}
            ></textarea>
        </div>
        <div>
            <Button 
            style={{color:'Teal', backgroundColor: 'Pink'}}
            variant="contained" 
            type="submit" 
            size="small">
            Add Recipe
            </Button>
        </div>
        </Box>
    </Grid>
    );
}

export default AddRecipe;

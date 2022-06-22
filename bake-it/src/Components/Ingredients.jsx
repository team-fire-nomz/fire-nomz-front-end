import React from "react";
import { Button, Box } from "@mui/material";

export function Ingredients () {

    if (!isLoggedIn) {
        return <Navigate to="/signin" replace={true} />
    }

	const submitHandler = (event) => {
		console.log("adding ingredients");
	    event.preventDefault();

	const handleChange = (inputType, event) => {
		if (inputType === "ingredients") {
		    setEnteredIngredients(event.target.value);
		}
	};

	axios
	.post(
	    "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
	recipeData,
	{
	    headers: { Authorization: `Token ${props.token}` },
	})
	.then((res) => {
	    console.log(res);
	})

	return (
		<Box className="HERE!" component="form" onSubmit={submitHandler}>
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
		<Button variant="contained" type="submit" size="small">
            Add Ingredients
        </Button>
		</Box>
		
	)
};
import { Box, Button } from "@mui/material";
import axios from "axios";
import Recipe from "../Components/Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notes from "../Components/Notes";
import RecipeList from '../Components/RecipeList';

const Tracking = (props) => {
  console.log (props)
const [recipe, setRecipe] = useState(null);


let params = useParams();
console.log(params);
console.log(recipe);


useEffect(() => {
	const handleSubmit = "https://bake-it-till-you-make-it.herokuapp.com/api/all_recipes?search=<search_term>";
	console.log(handleSubmit);
	axios.get(handleSubmit,
    {
		headers: { Authorization: `Token ${props.token}` }
	})
	
	.then((res) => {
	console.log(res);
	setRecipe(res.data);



	}).catch((err) => {
	console.log(err);
	});
}, []);


	return (
	<Box>
	{recipe && <Recipe {...props} />}
	<RecipeList {...props} />
	{recipe && <Box>
		<h3>Title: {recipe.title}</h3>
		<h3>Version: {recipe.version_number}</h3>
		<p>{recipe.ingredients}</p>
		<h4>RECIPE: {recipe.recipe_steps}</h4>
		<h5>BAKED ON: {recipe.created_at}</h5>
	</Box>}
	<div>
	<Notes {...props} />
	</div>
	<Button
		variant="contained" 
		type="submit" 
		size="small"
		>
		ADD NOTES
	</Button>
	<Button
		variant="contained" 
		type="submit" 
		size="small"
		>
		SUCCESSFUL RECIPE
	</Button>
	</Box>

);
};
export default Tracking;


//be able to view ingredients and recipe
//notes form to add changes they'd like to make to the next recipe
//add successful recipe button
//figure out tags


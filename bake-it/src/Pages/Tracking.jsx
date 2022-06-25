import { Card, Box, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import axios from "axios";
import Recipe from "../Components/Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tracking = (props) => {
  // console.log ()
const [recipes, setRecipes] = useState([]);
const [recipe, setRecipe] = useState(null);
const [newRecipe, setNewRecipe] = useState(null);

let params = useParams();
console.log(params);
console.log(recipe);

const handleEdit = (event) => {
	console.log('Handle Recipe Called');
	event.preventDefault();

	axios
	.patch(`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${params.id}/`,
	{
	recipe: recipe,
	},
	{
	headers: { Authorization: `Token ${props.token}`},
	}
	)
	.then((res) => {
	console.log('Successful Submit');
	console.log(res);
	});
};

useEffect(() => {
	const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${params.id}`;
	console.log(requestUrl);
	axios.get(requestUrl).then((res) => {
	console.log(res);
	setRecipe(res.data);
	}).catch((err) => {
	console.log(err);
	});
}, []);


	return (
	<Box>
	{recipe && <Recipe {...recipe} />}
	{recipe && <Box>
		<h3>Title: {recipe.title}</h3>
		<p>{recipe.ingredients}</p>
		<h4>RECIPE: {recipe.recipe}</h4>
		<h5>BAKED ON: {recipe.created_at}</h5>
	</Box>}
	</Box>
);

};
export default Tracking;

//recipe tracking page
//be able to view ingredients and recipe
//notes form to add changes they'd like to make to the next recipe
//add successful recipe button
//figure out tags


import { Box } from "@mui/material";
import axios from "axios";
import Recipe from "../Components/Recipe";
import { useEffect, useState } from "react";
import Notes from "../Components/Notes";
import NotesList from "../Components/NotesList";
import { Link } from "react-router-dom";


const Tracking = (props) => {
    console.log (props)
const [recipe, setRecipe] = useState(null);

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
}, [props.token]);


	return (
	<Box>
	<NotesList {...props} />
	{recipe && <Recipe {...props} />}
	<button type="submit" component={Link} to="/recipe/:id/tracking">
        FEEDBACK FORM
    </button>
	<Notes {...props} />
	</Box>

);
};
export default Tracking;


//be able to view ingredients and recipe
//notes form to add changes they'd like to make to the next recipe
//add successful recipe button
//figure out tags


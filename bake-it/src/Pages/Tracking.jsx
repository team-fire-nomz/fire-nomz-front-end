import { Box, Button } from "@mui/material";
import axios from "axios";
import Recipe from "../Components/Recipe";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Notes from "../Components/Notes";
import NotesList from "../Components/NotesList";


const Tracking = (props) => {
  console.log (props)
const [recipe, setRecipe] = useState(null);

let [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${searchParams}/notes/`;
//     console.log(requestUrl);
//     axios.get(requestUrl,
//     {
//       headers: { Authorization: `Token ${props.token}` }
//     })
//     .then((res) => {
//       console.log(res);
//       setRecipe(res.data);
//     })
//   }, [searchParams, props.token]);



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
	{recipe && <Recipe {...props} />}
	<button type="submit" component={Link} to="/recipe/:id/feedback">
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


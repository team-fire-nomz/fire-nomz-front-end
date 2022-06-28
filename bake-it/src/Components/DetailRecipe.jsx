
import { Card, Typography, Button } from "@mui/material";
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const DetailRecipe = (props) => {
    console.log(props)
    const [recipe, setRecipe] = useState({})
    console.log(recipe, "recipe")
    useEffect(() => {
        axios.get(`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/`,
        { headers: { Authorization: `Token ${props.token}` } }
        ).then(response => setRecipe(response.data))
    })
    // useEffect(() => {   
    //     axios.get(`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/notes/`,
    //     { headers: { Authorization: `Token ${props.token}` } }
    //     ).then(response => setRecipe(response.data))
    // })
    // if (recipe.chef === props.username) {
    //     //this is where the ui goes for a logged in user looking at their own recipe
    //     return 
    
    // }

    return (
        <Card>
        <div>
        <h3>Title: {recipe.title}</h3>
        <p>{recipe.ingredients}</p>
        <p>{recipe.recipe_steps}</p>
        <h4>Chef: {recipe.chef}</h4>
        <h4>Baked on: {recipe.created_at}</h4>
        </div>
        <Button
        component={Link}
        to="/recipe/id/tracking"
		variant="contained" 
		type="submit" 
		size="small"
		>
		ADD A NOTE
	</Button>
        </Card>
    // if (recipe.chef === props.username) {
    //     //this is where the ui goes for a logged in user looking at their own recipe
    //     return "This belongs to logged in user"
        
    // }

    // return (
    // <div>
    //     {recipe.map((eachRecipe) => {
    //         const RecipeChef = eachRecipe.chef
    //         const RecipeTitle = eachRecipe.title
    //         const RecipeIngredients = eachRecipe.ingredients
    //         const RecipeSteps = eachRecipe.recipe_steps
    //         const CreatedDate = eachRecipe.created_at
    //         const Feedback = eachRecipe.ready_for_feedback
    //         return (
    //             <Card>
    //                 <Typography>
	// 					Made by {RecipeChef}
	// 				</Typography>
	// 				<Typography>
	// 					Recipe Title {RecipeTitle}
	// 				</Typography>
	// 				<Typography>
	// 					Recipe Ingredients {RecipeIngredients}
	// 				</Typography>
	// 				<Typography>
	// 					Recipe Steps {RecipeSteps}
	// 				</Typography>
	// 				<Typography>
	// 					Created {CreatedDate}
	// 				</Typography>
	// 				<Button>
	// 					Feedback {Feedback}
	// 				</Button>
    //             </Card>
    //         )
    //     })}
    // </div>
    )
}

export default DetailRecipe;
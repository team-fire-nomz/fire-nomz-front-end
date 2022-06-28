import { Card, Typography, Button } from "@mui/material";
import {useEffect, useState} from 'react';
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
    
    if (recipe.chef === props.username) {
        //this is where the ui goes for a logged in user looking at their own recipe
        return "This belongs to logged in user"
        
    }

    return (
    <div>
        {recipe.map((eachRecipe) => {
            const RecipeChef = eachRecipe.chef
            const RecipeTitle = eachRecipe.title
            const RecipeIngredients = eachRecipe.ingredients
            const RecipeSteps = eachRecipe.recipe_steps
            const CreatedDate = eachRecipe.created_at
            const Feedback = eachRecipe.ready_for_feedback
            return (
                <Card>
                    <Typography>
						Made by {RecipeChef}
					</Typography>
					<Typography>
						Recipe Title {RecipeTitle}
					</Typography>
					<Typography>
						Recipe Ingredients {RecipeIngredients}
					</Typography>
					<Typography>
						Recipe Steps {RecipeSteps}
					</Typography>
					<Typography>
						Created {CreatedDate}
					</Typography>
					<Button>
						Feedback {Feedback}
					</Button>
                </Card>
            )
        })}
    </div>
    )
}

export default DetailRecipe;
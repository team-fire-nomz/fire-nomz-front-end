import axios from "axios"
import useState from 'react';
import {Typography, Card, Button} from "@mui/material";

function RecipeDetail () {
	const [allRecipes, setAllRecipes] = useState([])

	axios
		.get(`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${id}/`)
		.then((res) => {
			setAllRecipes(res.data)
		})

	return (
	<div>
		{allRecipes.map((eachRecipe) => {
			const RecipeTitle = eachRecipe.title
			const RecipeIngredients = eachRecipe.ingredients
			const RecipeSteps = eachRecipe.recipe_steps
			const CreatedDate = eachRecipe.created_at
			const Feedback = eachRecipe.ready_for_feedback
			return (
				<Card>
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

export default RecipeDetail ()
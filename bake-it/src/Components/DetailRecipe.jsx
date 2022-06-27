import { Card } from "@mui/material";
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
        <Card>
        <div>
        <h3>Title: {recipe.title}</h3>
        <p>{recipe.recipe_steps}</p>
        <h4>Chef: {recipe.chef}</h4>
        </div>
        </Card>
    )
}

export default DetailRecipe;
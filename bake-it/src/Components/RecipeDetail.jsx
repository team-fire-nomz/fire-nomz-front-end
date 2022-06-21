import {Card } from "@mui/material";



const RecipeDetail = (props) => {


    return (
        <Card>
        <div>
        <h3>Title: {props.title}</h3>
        <p>{props.ingredients}</p>
        <h4>RECIPE: {props.recipe}</h4>
        <h5>BAKED ON: {props.created_at}</h5>
        </div>
        </Card>
    )
}

export default RecipeDetail;


import { Link } from 'react-router-dom';
import {CardContent, Typography} from "@mui/material";

const Recipe = (props) => {
console.log(props.id)
    return (
        <div sx={{ overflow: 'scroll'}}>
        <CardContent>
            <Link onClick={()=> props.setSelected(props.id)} to={`/recipe/${props.id}`}>{props.title}</Link>
            <Typography>
                Ingredients: {props.ingredients}
            </Typography>
            <Typography>
                Recipe Steps: {props.recipe_steps}
            </Typography>
        </CardContent>
        </div>
    )
}

export default Recipe;
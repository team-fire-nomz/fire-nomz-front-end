import { Link } from 'react-router-dom';
import {CardContent, Typography} from "@mui/material";

const Recipe = (props) => {
console.log(props.id)
    return (
        <div sx={{ overflow: 'scroll'}}>
        <CardContent variant="outlined" >
            <Link onClick={()=> props.setSelected(props.id)} to={`/recipe/${props.id}`}>{props.title}</Link>
            <Typography sx={{ fontSize: 14 }} >
                Ingredients: {props.ingredients.map}
            </Typography>
            <Typography sx= {{ fontSize: 14}}>
                Recipe Steps: {props.recipe_steps}
            </Typography>
            <Typography sx={{ fontSize: 10}}>
                Baked On: {props.created_at}
            </Typography>
        </CardContent>
        </div>
    )
}

export default Recipe;
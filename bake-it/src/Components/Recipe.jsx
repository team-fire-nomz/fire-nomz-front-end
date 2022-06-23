import { Link } from 'react-router-dom';
import { Card } from "@mui/material";


const Recipe = (props) => {

    return (
        <Card
        sx={{
            backgroundColor: '#e9d79e',
            overflow: 'scroll',
        }}>
        <div>
        <Link to={`/recipe/${props.id}`}>{props.title}</Link>
        <p>Chef: {props.chef}</p>
        <h5>Baked on: {props.created_at}</h5>
        </div>
        </Card>
    )
}

export default Recipe;
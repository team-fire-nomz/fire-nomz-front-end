import { Link } from 'react-router-dom';



const Recipe = (props) => {

    return (
        <div
        sx={{
            overflow: 'scroll',
        }}>
        <div>
        <Link to={`/recipe/:${props.id}`}>{props.title}</Link>
        <p>Chef: {props.chef}</p>
        <h5>Baked on: {props.created_at}</h5>
        </div>
        </div>
    )
}

export default Recipe;
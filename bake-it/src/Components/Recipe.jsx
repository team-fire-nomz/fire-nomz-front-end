import { Link } from 'react-router-dom';



const Recipe = (props) => {
console.log(props.id)
    return (
        <div
        sx={{
            overflow: 'scroll',
        }}>
        <div>
        <Link onClick={()=> props.setSelected(props.id)} to={`/recipe/${props.id}`}>{props.title}</Link>
        </div>
        </div>
    )
}

export default Recipe;
import { Link } from 'react-router-dom';
import {CardContent, Typography, Button, Box} from "@mui/material";

const Recipe = (props) => {
console.log(props.id)
    return (
        <div sx={{ overflow: 'scroll'}}>
        <CardContent variant="outlined" >
            <Button variant="contained" sx={{ color: 'secondary', display:'inline'}} size="large" >
                <Box>
                    <Typography sx={{ fontSize: 18}}>
                        <Link onClick={()=> props.setSelected(props.id)} to={`/recipe/${props.id}`}>{props.title}</Link>
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: 14}}>
                        Baked By: {props.chef}, On: {props.created_at}
                    </Typography>
                </Box>
            </Button>
        </CardContent>
        </div>
    )
}

export default Recipe;
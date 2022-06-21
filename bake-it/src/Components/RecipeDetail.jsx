import {Card, Box, Button } from "@mui/material";
import Recipe from "./Recipe";


const RecipeDetail = (props) => {



    return (
        <Card>
        <Recipe />
        <div>
        <h3>Title: {props.title}</h3>
        <p>{props.ingredients}</p>
        <h4>RECIPE: {props.recipe}</h4>
        <h5>BAKED ON: {props.created_at}</h5>
        </div>
        <Box>
            <Box>
                <Button
                size="small"
                variant="contained"
                >
                EDIT
                </Button> 
            </Box>
            <Box>
                <Button
                to= "/signin"
                size="small"
                variant="contained"
                >
                DELETE
                </Button>
            </Box>
        </Box>
        </Card>
    )
}

export default RecipeDetail;


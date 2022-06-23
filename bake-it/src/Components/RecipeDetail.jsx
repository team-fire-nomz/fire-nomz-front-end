import {Card, Box, Button } from "@mui/material";
import { useEffect } from "react";
import Recipe from "./Recipe";
import { Navigate } from "react-router-dom";
import axios from "axios";


export const RecipeDetail = (props) => {

    if (!props.isLoggedIn) {
        return <Navigate to="/signin" replace={true} />;
    }
    const submitHandler = (event) => {
        console.log("deleting recipe");
        event.preventDefault();

    
    function handleRecipeDelete({ id }) {
            axios
                .patch(
                    `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${id}/tests/${id}/`,
                    {
                        headers: { Authorization: `token ${props.token}` },
                    }
                )
                .then((res) => {
                    console.log(res.status)
                })
                .catch((e) => {
                })
        }
    
        useEffect(() => {

            fetch(`https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${id}/tests/${id}/`, {
                method: 'DELETE'
            .then(() => setStatus('Recipe Deleted'))
            }
            )
        })
    };


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
                onClick={() => handleRecipeDelete ()}
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
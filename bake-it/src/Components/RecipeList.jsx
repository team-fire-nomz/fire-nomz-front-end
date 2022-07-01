import Recipe from "./Recipe";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container, Grid} from "@mui/material";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if(props.isLoggedIn) {
      const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes`
    console.log(requestUrl);
    axios
    .get(requestUrl,
    {
      headers: { Authorization: `Token ${props.token}` }
    })
    .then((res) => {
      console.log(res);
      setRecipes(res.data);
    })
    } else {
      const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/all_recipes`
    console.log(requestUrl);
    axios
    .get(requestUrl)
    .then((res) => {
      console.log(res);
      setRecipes(res.data);
    })
    }
  }, [props.token, props.isLoggedIn]);

  return (
    <Container sx={{ margin:'2px' }}>
    <Grid container justifyContent="center" textalign="center" direction="column">
      {recipes.length > 0 ?
        recipes.map((recipe) => (
          <Recipe
            setSelected={props.setSelected}
            id={recipe.id}
            title={recipe.title}
            chef={recipe.chef}
            created_at={recipe.created_at}
            key={recipe.id}
          />
        ))
      :
      <h3>NO RESULTS FOUND</h3>
      }
    </Grid>
    </Container>
  );
}

export default RecipeList;


import Recipe from "./Recipe";
import Search from "./Search";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container} from "@mui/material";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/all_recipes/${searchParams}`;
    console.log(requestUrl);
    axios.get(requestUrl,
    {
      headers: { Authorization: `Token ${props.token}` }
    })
    .then((res) => {
      console.log(res);
      setRecipes(res.data);
    })
  }, [searchParams, props.token]);

  return (
    <Container sx={{ margin:'2px'}}>
    <Search />
      {recipes.length > 0 ?
        recipes.map((recipe) => (
          <Recipe
            setSelected={props.setSelected}
            id={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            recipe={recipe.recipe_steps}
            chef={recipe.chef}
            created_at={recipe.created_at}
            key={recipe.id}
          />
        ))
      :
      <h3>NO RESULTS FOUND</h3>
      }
    
    </Container>
  );
}

export default RecipeList;


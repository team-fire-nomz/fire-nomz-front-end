import Recipe from "./Recipe";
import Search from "./Search";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container} from "@mui/material";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/all_recipes`;
    console.log(requestUrl);
    axios.get(requestUrl,
    {
      headers: { Authorization: `Token ${props.token}` }
    })
    .then((res) => {
      console.log(res);
      setRecipes(res.data);
      
    })
  }, [results, props.token]);

//   Conditional rendering
// Show one or show the other
// When recipe list renders, either use recipes or use results
// If we have results show results, otherwise show recipes
//     (if results.length>0 {
//       return results
//     })
  return (
    <Container sx={{ margin:'2px'}}>
    <Search setResults={setResults}/>
    {results && results.map((result) => (
          <Recipe
            setSelected={props.setSelected}
            id={result.id}
            title={result.title}
            ingredients={result.ingredients}
            recipe={result.recipe_steps}
            chef={result.chef}
            created_at={result.created_at}
            key={result.id}
          />
        ))}
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


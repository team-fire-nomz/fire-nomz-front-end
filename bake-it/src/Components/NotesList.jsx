import Recipe from "./Recipe";
import Search from "./Search";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container} from "@mui/material";

function NotesList(props) {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.id}/notes/`;
    console.log(requestUrl);
    axios.get(requestUrl,
    {
      headers: { Authorization: `Token ${props.token}` }
    })
    .then((res) => {
      console.log(res);
      setRecipes(res.data);
    })
  }, []);

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

export default NotesList;
import { Card, Box, Button } from "@mui/material";
import axios from "axios";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = (props) => {
  // console.log ()
  const [recipe, setRecipe] = useState(null);
  let params = useParams();
  console.log(params);
  console.log(recipe);

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${params.id}`;
    console.log(requestUrl);
    axios.get(requestUrl).then((res) => {
      console.log(res);
      setRecipe(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Card>
      {recipe && <Recipe {...recipe} />}
      {recipe && <Box>
        <h3>Title: {recipe.title}</h3>
        <p>{recipe.ingredients}</p>
        <h4>RECIPE: {recipe.recipe}</h4>
        <h5>BAKED ON: {recipe.created_at}</h5>
      </Box>}
      <Box>
        <Box>
          <Button size="small" variant="contained">
            EDIT
          </Button>
        </Box>
        <Box>
          <Button to="/signin" size="small" variant="contained">
            DELETE
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default RecipeDetail;

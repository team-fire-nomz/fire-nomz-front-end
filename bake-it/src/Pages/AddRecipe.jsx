import { useState } from "react";
import axios from "axios";
import { Box, Button, Grid, CardContent, Container } from "@mui/material";
import BG1 from "./BG1.jpeg";

export default function AddRecipe(props) {
  const [isEntered, setIsEntered] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredientsInputs, setIngredientsInputs] = useState([
    {
      type: "text",
      value: "",
    },
  ]);
  const [recipeInputs, setRecipeInputs] = useState([
    {
      type: "text",
      value: "",
    },
  ]);

  const handleSubmit = (e) => {
    axios
      .post(
        "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
        {
          title: title,
          ingredients: ingredientsInputs.map((item) => item.value),
          recipe_steps: recipeInputs.map((item) => item.value),
        },
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((res) => {
        console.log(res);
        
        // use react-dom to navigate to homepage
        window.location = "/";
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const addIngredientInput = () => {
    setIngredientsInputs((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const addRecipeInput = () => {
    setRecipeInputs((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleIngredientInputChange = (e, index) => {
    e.preventDefault();
    console.log("handleIngredientInputChange", index, e);
    // const index = e.target.id;
    setIngredientsInputs((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const handleRecipeStepsChange = (e, index) => {
    e.preventDefault();
    console.log("handleRecipeStepsChange", index, e);
    setRecipeInputs((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  const ingredients = [""];
  ingredientsInputs.map((item) => ingredients.concat(item.value));
  console.log(ingredients, "ingredients");

  const recipeSteps = [""];
  recipeInputs.map((item) => recipeSteps.concat(item.value));
  console.log(recipeSteps, "recipe");

  if (isEntered) {
    return "Your recipe has been submitted.";
  }

  return (
    <Container
      sx={{
        backgroundPosition: "center",
        height: "90vh",
        backgroundImage: `url(${BG1})`,
        backgroundRepeat: "no-repeat",
        overflow: "scroll",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CardContent>
          <label htmlFor="title" />
          <input
            type="text"
            required
            placeholder="TITLE:"
            id="title"
            value={title}
            key="uniqueTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardContent>
        <CardContent>
          <Box textAlign="center">
            <Button
              size="small"
              variant="contained"
              type="submit"
              key="ingredients"
              onClick={addIngredientInput}
            >
              Add ingredient
            </Button>
          </Box>
        </CardContent>
        <CardContent>
          {ingredientsInputs.map((item, i) => {
            return (
              <input
                onChange={(e) => handleIngredientInputChange(e, i)}
                placeholder="Ingredient:"
                value={item.value}
                id={`ingredients_${i}`}
                type={item.type}
                size="40"
                key={`ingredients_${i}`}
              />
            );
          })}
        </CardContent>
        <CardContent>
          <Box textAlign="center">
            <Button
              size="small"
              variant="contained"
              type="submit"
              key="recipeSteps"
              onClick={addRecipeInput}
            >
              Add recipe steps
            </Button>
          </Box>
        </CardContent>
        <CardContent>
          {recipeInputs.map((item, i) => {
            return (
              <input
                onChange={(e) => handleRecipeStepsChange(e, i)}
                placeholder="Recipe steps:"
                value={item.value}
                id={`recipe_steps_${i}`}
                type={item.type}
                key={`recipeSteps_${i}`}
                size="40"
              />
            );
          })}
        </CardContent>
        <CardContent>
          <Box textAlign="center">
            <Button
              size="small"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Create recipe
            </Button>
          </Box>
        </CardContent>
      </Grid>
    </Container>
  );
}

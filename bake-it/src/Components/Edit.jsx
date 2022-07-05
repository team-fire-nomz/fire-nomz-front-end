    import { useState, useEffect } from "react";
    import {useParams} from 'react-router-dom';
    import { Container, Button, Box, Grid, CardContent } from "@mui/material";
    import axios from "axios";
    import BG3 from "../Pages/BG3.jpeg";

    export default function Edit(props) {
    const [isEntered, setIsEntered] = useState(false);
    const [title, setTitle] = useState("");
    const {recipeId} = useParams();
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
        .patch(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${recipeId}/`,
        {
            title: title,
            ingredient: ingredientsInputs.map((item) => item.value),
            recipe_steps: recipeInputs.map((item) => item.value)
        },
        { headers: { Authorization: `Token ${props.token}` } }
        )
        .then((res) => {
        console.log(res);
        window.location = `/recipe/{recipeId}`;

        // use react-dom to navigate to homepage
        });
    };
    useEffect(() => {
    axios
        .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${recipeId}/`,
        { headers: { Authorization: `Token ${props.token}` } }
        )
        .then((response) => {
        // setRecipe(response.data.recipe_steps);
        // setTitle(response.data.title);
        // setIngredient(response.data.ingredients);
        });
    }, [props.token, recipeId]);


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

    
    setIngredientsInputs((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

        return newArr;
    });
    };

    const handleRecipeStepsChange = (e, index) => {
        e.preventDefault();

   
    setRecipeInputs((s) => {
        const newArr = s.slice();
        newArr[index].value = e.target.value;

        return newArr;
    });
    };

    const ingredients = "";
    ingredientsInputs.map((item) => ingredients.concat(item.value));
    console.log(ingredients);

    const recipeSteps = "";
    recipeInputs.map((item) => recipeSteps.concat(item.value));
    console.log(recipeSteps);

    if (isEntered) {
    return "Your recipe has been edited.";
    }

    return (
    <Container sx={{ 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: '90vh', 
        backgroundImage: `url(${BG3})`, 
        backgroundRepeat: 'no-repeat', 
        overflow: "scroll" }}>
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
            placeholder="Title:"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </CardContent>
        <CardContent>
            <Box textAlign="center">
                <Button 
                size="small"
                variant="contained"
                type="submit" 
                onClick={addIngredientInput}
                >
                Add ingredients
                </Button>
            </Box>    
        </CardContent>
        <CardContent>
        {ingredientsInputs.map((item, i) => {
            return (
            <input
                onChange={(e) => handleIngredientInputChange(e,i)}
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
            <Box textAlign="center">
                <Button 
                size="small"
                variant="contained"
                type="submit" 
                onClick={addRecipeInput}
                >
                Add recipe steps
                </Button>
            </Box>    
        <CardContent>
        {recipeInputs.map((item, i) => {
          return (
          <input
              onChange={(e) => handleRecipeStepsChange(e, i)}
              placeholder="Recipe steps:"
              value={item.value}
              id={`recipe_steps_${i}`}
              type={item.type}
              size="40"
              key={`recipe_steps_${i}`}
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
                Edit recipe
                </Button>
            </Box>    
        </CardContent>
    </Grid>
    </Container>
    );
    }

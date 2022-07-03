    import { useState, useEffect } from "react";
    import {useParams} from 'react-router-dom';
    import { Container, Button, Box, Grid, CardContent } from "@mui/material";
    import axios from "axios";
    import BG3 from "../Pages/BG3.jpeg";

    export default function Edit(props) {
    const inputArr = [
    {
        type: "text",
        id: 1,
        value: "",
    },
    ];
    const [recipe, setRecipe] = useState("");
    const [isEntered, setIsEntered] = useState(false);
    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [inputs, setInputs] = useState(inputArr);
    const {recipeId} = useParams();

    const handleSubmit = (e) => {
    axios
        .patch(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${recipeId}/`,
        {
            title: title,
            ingredient: inputs.map((item) => item.value),
            recipe_steps: inputs.map((item) => item.value)
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
        setRecipe(response.data.recipe_steps);
        setTitle(response.data.title);
        setIngredient(response.data.ingredients);
        });
    }, []);


    const addInput = () => {
    setInputs((s) => {
        return [
        ...s,
        {
            type: "text",
            value: "",
        },
        ];
    });
    };

    const handleInputChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setInputs((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

    const handleRecipeStepsChange = (e) => {
        e.preventDefault();

    const index = e.target.id;
    setInputs((s) => {
        const newArr = s.slice();
        newArr[index].value = e.target.value;

        return newArr;
    });
    };

    const ingredients = "";
    inputs.map((item) => ingredients.concat(item.value));
    console.log(ingredients);

    const recipeSteps = "";
    inputs.map((item) => recipeSteps.concat(item.value));
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
                onClick={addInput}
                >
                Add ingredients
                </Button>
            </Box>    
        </CardContent>
        <CardContent>
        {inputs.map((item, i) => {
            return (
            <input
                onChange={handleInputChange}
                placeholder="Ingredient:"
                value={item.value}
                id={i}
                type={item.type}
                size="40"
                key={ingredients}
            />
            );
        })}
        </CardContent>
            <Box textAlign="center">
                <Button 
                size="small"
                variant="contained"
                type="submit" 
                onClick={addInput}
                >
                Add recipe steps
                </Button>
            </Box>    
        <CardContent>
        {inputs.map((item, i) => {
          return (
          <input
              onChange={handleRecipeStepsChange}
              placeholder="Recipe steps:"
              value={item.value}
              id={i}
              type={item.type}
              size="40"
              key={recipe}
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

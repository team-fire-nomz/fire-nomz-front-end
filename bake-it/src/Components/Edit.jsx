    import { useState, useEffect } from "react";
    import { Button, Box, Grid, CardContent } from "@mui/material";
    import axios from "axios";

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
    const [ingredients, setIngredients] = useState("");
    const [inputs, setInputs] = useState(inputArr);

    const handleSubmit = (e) => {
    axios
        .patch(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/`,
        {
            title: title,
            ingredients: inputs.map((item) => item.value),
            recipe_steps: recipe,
        },
        { headers: { Authorization: `Token ${props.token}` } }
        )
        .then((res) => {
        console.log(res);
       
        // use react-dom to navigate to homepage
        });
    };
    useEffect(() => {
    axios
        .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/`,
        { headers: { Authorization: `Token ${props.token}` } }
        )
        .then((response) => {
        setRecipe(response.data.recipe_steps);
        setTitle(response.data.title);
        setIngredients(response.data.ingredients);
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


    if (isEntered) {
    return "Your recipe has been edited.";
    }

    return (
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
            key={title}
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
                placeholder="ingredients:"
                value={ingredients}
                id={i}
                type={item.type}
                size="40"
                key={ingredients}
            />
            );
        })}
        </CardContent>
        <CardContent>
        <textarea
            id="recipe"
            placeholder="add instructions here"
            value={recipe}
            key={recipe}
            onChange={(e) => setRecipe(e.target.value)}
        />
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
    );
    }

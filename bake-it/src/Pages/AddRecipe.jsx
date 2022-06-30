import { useState } from "react";
import axios from "axios";
import {Grid, CardContent} from '@mui/material';

export default function AddRecipe(props) {
const inputArr = [
    {
    type: "text",
    id: 1,
    value: ""
    }
];
const [recipe, setRecipe] = useState("");
const [title, setTitle] = useState("");
const [inputs, setInputs] = useState(inputArr);

const handleSubmit = () => {
    axios.post(
    "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
    {
        title: title,
        ingredients: inputs.map((item) => item.value),
        recipe_steps: recipe,
    },
    { headers: { Authorization: `Token ${props.token}` } }
    );
};

const addInput = () => {
    setInputs((s) => {
    return [
        ...s,
        {
        type: "text",
        value: ""
        }
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


const ingredients = "";
inputs.map((item) => ingredients.concat(item.value));
console.log(ingredients);


return (
    <div>
    <Grid container direction="column" justifyContent="center" alignItems="center">
    <CardContent>
        <label htmlFor="title"/>
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
        <button onClick={addInput}>
            Add Ingredient
        </button>
    </CardContent>
    <CardContent>
        {inputs.map((item, i) => {
            return (
            <input
                onChange={handleInputChange}
                placeholder="INGREDIENTS:"
                value={item.value}
                id={i}
                type={item.type}
                size="40"
            />
            );
        })}
    </CardContent>
    <CardContent>
        <textarea
            id="recipe"
            placeholder="add instructions here"
            value={recipe}
            key="uniqueRecipe"
            onChange={(e) => setRecipe(e.target.value)}
        />
    </CardContent>
    <CardContent>
        <button type="submit" onClick={handleSubmit}>
            CREATE RECIPE
        </button>
    </CardContent>
    </Grid>
    </div>
);
}
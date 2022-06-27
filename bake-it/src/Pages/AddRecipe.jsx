import { useState } from "react";
import axios from "axios";


export default function AddRecipe(props) {
const inputArr = [
    {
    type: "text",
    id: 1,
    value: ""
    }
];
const [recipe, setRecipe] = useState("");
const [inputs, setInputs] = useState(inputArr);

const handleSubmit = () => {
    axios.post(
    "https://bake-it-till-you-make-it.herokuapp.com/api/recipes/",
    {
        title: "test title",
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

const handleTextAreaChange = (e) => {
    setRecipe(e.target.value);
};

const ingredients = "";
inputs.map((item) => ingredients.concat(item.value));
console.log(ingredients);

return (
    <div>
    <button onClick={addInput}>Add Ingredient</button>
    {inputs.map((item, i) => {
        return (
        <input
            onChange={handleInputChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
        />
        );
    })}
    <textarea
        id="recipe"
        placeholder="add instructions here"
        value={recipe}
        onChange={(event) => handleTextAreaChange(event)}
    />
    <button type="submit" onClick={handleSubmit}>
        Create Recipe
    </button>
    </div>
);
}




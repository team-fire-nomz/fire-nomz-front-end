import { useState } from "react";
import axios from "axios";

const TOKEN = "a68f1256491b96b650346807fb88c3f201eca5f1";

export default function AddRecipe() {
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
        recipe: recipe
      },
      { headers: { Authorization: `Token ${TOKEN}` } }
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


    return (
    <Grid
        container
        sx={{
            overflow: 'scroll',
        }}
        spacing={0}
        padding={0.5}
        direction="column"
        alignItems="center"
        justifyContent="Center"
        style={{ minHeight: "75vh" }}>
        <Box
            boxShadow={5}
            className="HERE!" 
            component="form" 
            onSubmit={submitHandler}>
        <div>
            <label htmlFor="title"></label>
            <input
            type="text"
            required
            placeholder="TITLE:"
            id="title"
            value={props.title}
            onChange={(e) => handleChange("title", e)}/>
        </div>
        <div>
            <label htmlFor="version"></label>
            <input
            type="text"
            required
            placeholder="VERSION:"
            id="version"
            value={props.version_number}
            onChange={(e) => handleChange("version_number", e)}
            />
        </div>
        <div>
            <label htmlFor="ingredients"></label>
            <textarea
            id="description"
            required
            placeholder="Ingredients"
            rows="12"
            value={props.ingredients}
            onChange={(e) => handleChange("ingredients", e)}
            ></textarea>
        </div>
        <div>
            <label spacing={0} htmlFor="recipe"></label>
            <textarea
            id="description"
            required
            placeholder="Recipe"
            rows="12"
            value={props.recipe_steps}
            onChange={(e) => handleChange("recipe", e)}
            ></textarea>
        </div>
        <div>
            <Button
            variant="contained" 
            type="submit" 
            size="small">
            Add Recipe
            </Button>
        </div>
        </Box>
    </Grid>
    );

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




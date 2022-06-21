import Recipe from "./Recipe";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/?${searchParams}`;
    console.log(requestUrl);
    axios.get(requestUrl).then((res) => {
      console.log(res);
      setRecipes(res.data);
    });
  }, [searchParams]);

  return (
    <div>
      {recipes.length > 0 ?
        recipes.map((recipe) => (
          <Recipe
            id={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
            recipe={recipe.recipe}
            chef={recipe.chef}
            created_at={recipe.created_at}
            key={recipe.id}
          />
        ))
      :
      <h3>NO RESULTS FOUND</h3>
      }

      <Link to="/addrecipe">ADD YOUR NEW RECIPE</Link>
    </div>
  );
}

export default RecipeList;


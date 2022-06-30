import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import axios from "axios";

const DetailRecipe = (props) => {
  console.log(props);
  const [isExpanded, setIsExpanded] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [notes, setNotes] = useState(null);

  console.log(notes);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(recipe, "recipe");
  useEffect(() => {
    axios
      .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/`,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((response) => setRecipe(response.data));
  }, []);

  useEffect(() => {
    console.log(props.selected);

    axios
      .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/notes/`,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((response) => setNotes(response.data));
  }, []);

  return (
    <Card>
      <div>
        <h3>Title: {recipe.title}/</h3>
        <p>{recipe.ingredients}</p>
        <p>{recipe.recipe_steps}</p>
        <h4>Chef: {recipe.chef}</h4>
        <h4>Baked on: {recipe.created_at}</h4>
      </div>
      <ul>
        {notes &&
          notes.map((note) => {
            return <li>{note.note} - {note.created_at} </li>
            

          })}
      </ul>
      <Button
        component={Link}
        to="/recipe/:id/feedback"
        variant="contained"
        type="submit"
        size="small"
      >
        PROVIDE FEEDBACK
      </Button>
      <Notes {...props} />
    </Card>
  );
};

export default DetailRecipe;

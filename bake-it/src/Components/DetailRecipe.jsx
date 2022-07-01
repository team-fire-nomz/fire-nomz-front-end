import { Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import Edit from "./Edit";
import axios from "axios";

const DetailRecipe = (props) => {
  console.log(props);
  const [recipe, setRecipe] = useState({});
  const [notes, setNotes] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  console.log(notes);

  console.log(recipe, "recipe");

  const getNotes = () => {
    axios
      .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/notes/`,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((response) => setNotes(response.data));
  };

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
    getNotes();
  }, []);

  return (
    <Card>
      <div>
        <h3>Title: {recipe.title}/</h3>
        <ul>{recipe.ingredients}</ul>
        <ul>{recipe.recipe_steps}</ul>
        <h4>Chef: {recipe.chef}</h4>
        <h4>Baked on: {recipe.created_at}</h4>
      </div>
      <ul>
        {notes &&
          notes.map((note, noteIndex) => {
            return (
              <li key={noteIndex}>
                {note.note} - {note.created_at}{" "}
              </li>
            );
          })}
      </ul>
      <Edit {...props}/>
      <Button
        component={Link}
        to="/recipe/:id/feedback"
        variant="contained"
        type="submit"
        size="small"
      >
        PROVIDE FEEDBACK
      </Button>
      <Notes {...props} onNoteSubmit={getNotes} />
    </Card>
  );
};

export default DetailRecipe;

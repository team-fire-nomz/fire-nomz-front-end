import { Card, Button, CardContent, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import axios from "axios";
import BG4 from "../Pages/BG4.jpeg"

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
    <Container sx={{ height: '90vh', backgroundImage: `url(${BG4})`, backgroundRepeat: 'no-repeat', overflow: "scroll" }}>
    <Card>
      <div>

        <Container>
          <Typography variant="h6">Recipe Title:</Typography>
            <CardContent variant="p">{recipe.title}</CardContent>
          <Typography variant="h6">Ingredients:</Typography>
            <CardContent variant="p">{recipe.ingredients}</CardContent>
          <Typography variant="h6">Recipe Steps:</Typography>
            <CardContent variant="p">{recipe.recipe_steps}</CardContent>
          <Typography variant="h6">Baked By:</Typography>
            <CardContent variant="p">{recipe.chef}</CardContent>
          <Typography variant="h6">Made On:</Typography>
            <CardContent>{recipe.created_at}</CardContent>
        </Container>
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
      <Button
        component={Link}
        to={`/recipe/${props.selected}/edit`}
        variant="contained"
        type="submit"
        size="small"
      >
        Edit recipe
      </Button>
      <Button
        component={Link}
        to={`/recipe/${props.selected}/feedback`}
        variant="contained"
        type="submit"
        size="small"
      >
        Provide feedback
      </Button>
      <Notes {...props} onNoteSubmit={getNotes} />
    </Card>
    </Container>
  );
};

export default DetailRecipe;

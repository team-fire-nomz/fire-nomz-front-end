import { Card, Button, CardContent, Typography, Container } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import axios from "axios";
import RecipeDetailBGImage from "../Pages/RecipeDetailBGImage.jpeg"

const DetailRecipe = (props) => {
  console.log(props);
  const [recipe, setRecipe] = useState({});
  const [notes, setNotes] = useState(null);

  console.log(notes);

  console.log(recipe, "recipe");

  const getNotes = useCallback(() => {
    axios
      .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/notes/`,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((response) => setNotes(response.data));
  }, [props.selected, props.token]);

  useEffect(() => {
    axios
      .get(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/`,
        { headers: { Authorization: `Token ${props.token}` } }
      )
      .then((response) => setRecipe(response.data));
  }, [props.selected, props.token]);

  useEffect(() => {
    console.log(props.selected);
    getNotes();
  }, [getNotes, props.selected]);

  return (
    <Container >
    <Card sx={{ height: '90vh', backgroundImage: `url(${RecipeDetailBGImage})`, overflow: "scroll" }}>
      <div>
        <Card sx={{
          display: 'inline-block', 
          minWidth: 275, 
          bgcolor: 'primary',
          boxShadow: 5,
          border: 1,
          borderRadius: 2,
          margin: 10,
          }}>
          <Typography sx={{fontSize: 15}}>
            Are you here to give the baker feedback?
          </Typography>
          <Button
            component={Link}
            to={`/recipe/${props.selected}/feedback`}
            variant="contained"
            type="submit"
            size="small"
          >
            click here
          </Button>
        </Card>
        <Card sx={{
          display: 'inline-block', 
          minWidth: 275, 
          bgcolor: 'primary',
          boxShadow: 5,
          border: 1,
          borderRadius: 2,
          margin: 10
          }}>
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 25 }}>
              Recipe Title:
            </Typography>
            <br />
            <Typography variant="body" sx={{ mb: 1.5 }} color="text.primary">
              {recipe.title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 25 }}>
              Ingredients:
            </Typography>
            <br />
            <Typography variant="body" sx={{ mb: 1.5 }} color="text.primary">
              {recipe.ingredients}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 25 }}>
              Recipe Steps:
            </Typography>
            <br />
            <Typography variant="body" sx={{ mb: 1.5 }} color="text.primary">
              {recipe.recipe_steps}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 25 }}>
              Baked By:
            </Typography>
            <br />
            <Typography variant="body" sx={{ mb: 1.5 }} color="text.primary">
              {recipe.chef}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 25 }}>
              Made On:
            </Typography>
            <br />
            <Typography variant="body" sx={{ mb: 1.5 }} color="text.primary">
              {recipe.created_at}
            </Typography>
          </CardContent>
          <CardContent>
            <Button
              component={Link}
              to={`/recipe/${props.selected}/edit`}
              variant="contained"
              type="submit"
              size="small"
            >
              Edit Recipe
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card sx={{
          display: 'inline-block', 
          minWidth: 275, 
          bgcolor: 'primary',
          boxShadow: 5,
          border: 1,
          borderRadius: 2,
          margin: 10,
          }}>
        <Typography variant="h6">Baker's Notes</Typography>
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
      </Card>
      <Card sx={{
          display: 'inline-block', 
          minWidth: 275, 
          bgcolor: 'background.paper',
          boxShadow: 5,
          border: 1,
          borderRadius: 2,
          margin: 10
          }}>
        <Notes {...props} onNoteSubmit={getNotes} />
      </Card>
    </Card>
    </Container>
  );
};

export default DetailRecipe;

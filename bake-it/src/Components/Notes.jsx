import React from "react";
import { Grid, Button, Box } from "@mui/material";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Notes(props) {
  console.log(props);
  const [enteredNote, setEnteredNote] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  

  if (!props.isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }
  const submitHandler = (event) => {
    console.log("adding note");
    event.preventDefault();

    const notesData = {
      title: enteredTitle,
      note: enteredNote,
    };
    console.log("notesData", notesData);
    axios
      .post(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.selected}/notes/`,
        notesData,
        {
          headers: { Authorization: `Token ${props.token}` },
        }
      )
      .then((res) => {
        console.log(res);
        props.onNoteSubmit();
      });
  };
  const handleChange = (inputType, event) => {
    if (inputType === "title") {
      setEnteredTitle(event.target.value);
    }
    if (inputType === "notes") {
      setEnteredNote(event.target.value);
    }
  };
  

  return (
    <Grid
      container
      sx={{
        overflow: "scroll",
      }}
      spacing={0}
      padding={0}
      direction="column"
      alignItems="center"
      justifyContent="Center"
      style={{ minHeight: "25vh" }}
    >
      <Box className="FORM!" component="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title" />
          <input
            type="text"
            required
            placeholder="TITLE:"
            id="title"
            value={props.title}
            onChange={(e) => handleChange("title", e)}
          />
        </div>
        <div>
          <label htmlFor="note" />
          <textarea
            id="description"
            required
            placeholder="Create your note"
            rows="12"
            value={props.note}
            onChange={(e) => handleChange("notes", e)}
          ></textarea>
        </div>
        <div>
          <Button
            variant="contained"
            type="submit"
            size="small"
            onClick={submitHandler}
          >
            Add Note
          </Button>
        </div>
      </Box>
    </Grid>
  );
}

export default Notes;

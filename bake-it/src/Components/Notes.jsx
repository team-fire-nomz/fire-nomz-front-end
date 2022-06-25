import React from "react";
import { Grid, Button, Box } from "@mui/material";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Notes(props) {
    const [enteredNote, setEnteredNote] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [isEntered, setIsEntered] = useState(false);

    if (!props.isLoggedIn) {
    return <Navigate to="/" replace={true} />;
    }
    const submitHandler = (event) => {
        console.log("adding note");
    event.preventDefault();
    
    const notesData ={
        title: enteredTitle,
        note: enteredNote,
        }
        console.log("notesData", notesData)
    axios
        .post(
        `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.id}/notes/`,
        notesData,
        {
        headers: { Authorization: `Token ${props.token}` },
        })
        .then((res) => {
        console.log(res);
        setIsEntered(true);

        })
    }
    const handleChange = (inputType, event) => {
    if (inputType === "title") {
        setEnteredTitle(event.target.value);
    }
    if (inputType === "notes") {
        setEnteredNote(event.target.value);
    }
    }
    if (isEntered) {
        return <Navigate to="/" />;
      }

    return (
    <Grid
        container
        sx={{
            backgroundColor: '#e9d79e',
            overflow: 'scroll',
        }}
        spacing={0}
        padding={0.5}
        direction="column"
        alignItems="center"
        justifyContent="Center"
        style={{ minHeight: "75vh" }}
    >
        <Box
        className="HERE!" 
        component="form" 
        onSubmit={submitHandler}>
        <div>
            <label htmlFor="title"/>
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
            <label htmlFor="ingredients"/>
            <textarea
            id="description"
            required
            placeholder="Create your note"
            rows="12"
            value={props.ingredients}
            onChange={(e) => handleChange("ingredients", e)}
            ></textarea>
        </div>
        <div>
            <Button 
            style={{color:'Teal', backgroundColor: 'Pink'}}
            variant="contained" 
            type="submit" 
            size="small">
            Add Note
            </Button>
        </div>
        </Box>
    </Grid>
    );
    };

export default Notes;

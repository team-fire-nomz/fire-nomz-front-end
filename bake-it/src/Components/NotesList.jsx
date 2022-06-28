import Recipe from "./Recipe";
import Notes from "./Notes";
import Search from "./Search";
import { useEffect, useState } from "react";
import axios from "axios";
import {Container} from "@mui/material";

function NotesList(props) {
  const [notes, setNotes] = useState(null);
  

  useEffect(() => {
    const requestUrl = `https://bake-it-till-you-make-it.herokuapp.com/api/recipes/${props.id}/notes/`;
    console.log(requestUrl);
    axios.get(requestUrl,
    {
      headers: { Authorization: `Token ${props.token}` }
    })
    .then((res) => {
      console.log(res);
      setNotes(res.data);
    })
  }, []);

  return (
    <Container sx={{ margin:'2px'}}>
      {notes.length > 0 ?
        notes.map((note) => (
          <Notes
            setSelected={props.setSelected}
            id={note.id}
            title={note.title}
            version_number={note.recipe_version}
            note={note.note}
            key={note.id}
          />
        ))
      :
      <h3>NO RESULTS FOUND</h3>
      }
    
    </Container>
  );
}

export default NotesList;
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {

    const [expanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
       const {name, value} = event.target;

       setNote(prevNote => {
        return {
            ...prevNote,
            [name] : value
        };
       });
    }

    const submitNote = (event) => {
        // send the current created note
        props.onAdd(note);
        // clear input after adding
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const Expand = () => {
      setExpanded(true);
    }

    return (
        <div>
          <form className="create-note">
            {expanded ?
             <input onChange={handleChange}
              name="title"
              value={note.title}
              placeholder="Title" /> : null}
            <textarea onClick={Expand}
             onChange={handleChange}
              name="content"
              value={note.content}
              placeholder="Take a note..."
              rows={expanded ? 3 : 1} />
            <Zoom in={expanded}>
              <Fab color="secondary" onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </form>
        </div>
      );
}

export default CreateArea;
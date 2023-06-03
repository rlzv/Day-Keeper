import React, { useState } from "react";

const CreateArea = (props) => {
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

    return (
        <div>
          <form>
            <input onChange={handleChange} name="title" value={note.title}placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={note.content}placeholder="Take a note..." rows="3" />
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
      );
}

export default CreateArea;
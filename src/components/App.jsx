import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';



const App = () => {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            //we get hold of all of the prevNotes and add then newNote at the end
            return [...prevNotes, newNote];
        });
    }


    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        })
    }
    

    return (
        <div>
          <Heading />
          <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
                );
            })}
          <Footer />
        </div>
      );
};

export default App;
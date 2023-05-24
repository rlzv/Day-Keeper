import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import notes from "../notes.js"



const App = () => {
    return ( 
        <div >
            <Heading />
                {notes.map((noteItem) => {
                    return (<Note
                        key = {noteItem.key}
                        title = {noteItem.title}
                        content = {noteItem.content}
                    />
                );
})}
            <Footer />
        </div>
    );
};

export default App;
import React from "react";

const Note = () => {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = days[date.getDay()];
    let todo;

    switch(currentDay) {
        case days[0]:
            todo = "Rest, you are hangover!";
            break;
        case days[1]:
            todo = "Faculty starts, todo PDM project!";
            break;
        case days[2]:
            todo = "Free this day, recuparate PLF";
            break;
        case days[3]:
            todo = "RC lab";
            break;
        case days[4]:
            todo = "Math lab 8:00, no rush";
            break;
        case days[5]:
            todo = "Go home";
            break;
        case days[6]:
            todo = "Grab a drink";
            break;
        default:
            todo = "New day wtf";
    }

    
    return (
        <div className="note">
            <h1>{currentDay}</h1>
            <p>{todo}</p>
        </div>
    )
}

export default Note;
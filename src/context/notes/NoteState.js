import React from "react";

import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3006";

  // fetching all notes with the help of a function
  const getNotes = async () => {
    // fetching using api
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };

  //  initiating a state for the notes
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);
  //    Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const note = json;

    setnotes(notes.concat(note));
  };
  //   delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("not is deleted with id " + id);
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newnotes);
  };

  //  edit a note
  const editNote = async (id, title, description, tag) => {
    console.log(title);
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem("token"),
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
   
    let newNotes = JSON.parse(JSON.stringify(notes));
    for(let index = 0; index < newNotes.length; index++ ) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(newNotes)
    setnotes(newNotes);
    console.log(notes)
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, getNotes, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;

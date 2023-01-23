import React from "react";
import NoteContext from "../NoteContext";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3006";

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZmNlMTAxMDRjZWE2YmZkOTc1ZTVmIn0sImlhdCI6MTY3MjQ2NjAyMH0.1YI55arDxqlFEb05UxiBEalx5fslnWEM4_f_rMzD0wg",
      },
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };
  const notesInitial = [
    
  ];
  const [notes, setnotes] = useState(notesInitial);
  //    Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Accept":"*/*",
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZmNlMTAxMDRjZWE2YmZkOTc1ZTVmIn0sImlhdCI6MTY3MjQ2NjAyMH0.1YI55arDxqlFEb05UxiBEalx5fslnWEM4_f_rMzD0wg",
      },

      body: JSON.stringify({title, description, tag}),
      
    });const json = await response.json();
    console.log(json);

    const note = {
      _id: "63afcec7e5453e1878cb21909",
      user: "63afce10104cea6bfd975e5f",
      title: title,
      description: description,
      tag: tag,
      date: "2022-12-31T05:55:19.822Z",
      __v: 0,
    };

    setnotes(notes.concat(note));
  };
  //   delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZmNlMTAxMDRjZWE2YmZkOTc1ZTVmIn0sImlhdCI6MTY3MjQ2NjAyMH0.1YI55arDxqlFEb05UxiBEalx5fslnWEM4_f_rMzD0wg",
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
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZmNlMTAxMDRjZWE2YmZkOTc1ZTVmIn0sImlhdCI6MTY3MjQ2NjAyMH0.1YI55arDxqlFEb05UxiBEalx5fslnWEM4_f_rMzD0wg",
      },

      body: JSON.stringify(title, description, tag),
    });
    return response.json();
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;

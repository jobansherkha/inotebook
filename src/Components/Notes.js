import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, setnotes, getNotes } = context;

  useEffect(() => {
    getNotes()
  },[])
  


  return (
    
      <div className="conatiner">
        <div className="row">
          {notes.map((note) => {
            return (
              <div className="col-md-3 p-3" key={note._id}>
                {" "}
                <NoteItem
                  title={note.title}
                  tag={note.tag}
                  description={note.description}
                  _id = {note._id}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

import React from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";


export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const{note, updateNote} = props;
  return (
   <> <div className="card">
  <div className="card-body">
    <h5 className="props.title">{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
    <p className="card-text">{props.description}.</p>
    
    <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>

    <i className="fa-sharp fa-solid fa-pen mx-2" onClick={()=>{updateNote(note)}}></i>
    
  </div>
</div></>
  )
}

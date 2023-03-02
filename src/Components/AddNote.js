import React from "react";
import { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  return (
    <div>
      <form className="container rounded" style={{backgroundColor: "#FBF9C9"}}>
        <div className="form-group">
          <label forhtml="title">Title</label>
          
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
             minLength ={5}
             required
          />
        </div>
        <div className="form-group">
          <label forhtml="description">description</label>
          <textarea type="text"
            
             className="form-control"
             id="description"
             name="description"
             onChange={onChange} 
             minLength ={5}
             requiredaria-label=" write note description here"></textarea>
      
        </div>
        <div className="form-group">
          <label forhtml="tag">tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
             minLength ={5}
             required
          />
        </div>

        <button  disabled = {note.title.length<5 || note.description.length <5 }className = "btn  btn-outline-warning btn-light btn-block mb-4 mt-4" type="submit"  onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

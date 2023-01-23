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
      <form className="container">
        <div className="form-group">
          <label forhtml="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label forhtml="description">description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label forhtml="tag">tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

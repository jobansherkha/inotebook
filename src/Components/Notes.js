import React from "react";
import { useRef, useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);
  const [note, setnote] = useState({
    etitle: " ",
    edescription: " ",
    etag: " ",
  });

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  
  
  const ref = useRef(null);
  const refclose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    
    e.preventDefault();
    console.log(note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click()

  };

  return (
    <>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        hidden="yes"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {" "}
              <form className="container">
                <div className="form-group">
                  <label forhtml="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                    minLength = {5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label forhtml="description">description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength = {5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label forhtml="tag">tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    minLength = {5}
                    required
                  />
                </div>
              </form>{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref = {refclose}
                
                
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
                disabled = {note.etitle.length <5 || note.edescription <5 }
              >
                edit note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner">
        <div className="row">
        <div className="conatiner">
          {notes.length === 0 && "No notes to display"}</div>
          {notes.map((note) => {
            return (
              <div className="col-md-3 p-3" key={note._id}>
                {" "}
                <NoteItem
                  title={note.title}
                  tag={note.tag}
                  description={note.description}
                  _id={note._id}
                  updateNote={updateNote}
                  note={note}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

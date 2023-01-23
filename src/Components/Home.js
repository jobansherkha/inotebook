import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";


export default function Home() {
 
  return (
    <div className="my-3">
      <h2> Add a note </h2>
      <AddNote/>
      <h2> Your notes </h2>
      <Notes/>
      
    </div>
  );
}

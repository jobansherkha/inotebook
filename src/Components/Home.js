import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";


export default function Home(props) {
 
  return (
    <div className="my-3">
      
      <Notes showAlert = {props.showAlert}/>
      
    </div>
  );
}

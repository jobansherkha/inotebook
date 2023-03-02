import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";


export default function Home(props) {
 
  return (
    <div className="my-3" style={{backgroundColor : "#FBF9C9"}}>
      
      <Notes showAlert = {props.showAlert}/>
      
    </div>
  );
}

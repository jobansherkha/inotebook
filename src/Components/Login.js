import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    let history = useNavigate();
  const host = "http://localhost:3006";

//   setting up the state 
  const [note, setnote] = useState({
    email: "",
    password: "",
  });

//   making a onChange function 

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

//   calling api using fetch method
  const login = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    console.log(json);
    if ( json.success){
       props.showAlert("success", "your are successfully logged in ")
        localStorage.setItem("token", json.authtoken)
        
        history("/")

    }
    else{
      props.showAlert("danger", json.error)
    }
    
  };

//   making a handleClick function 

  const handleClick = (e) => {
    e.preventDefault();
    console.log(note.email,note.password)
    login(note.email, note.password);
    setnote({ email: "", password: "" });
    
  };

  return (
    <div className="container">
      <h2 className=" text-center mt-3"><mark> Login </mark>here to view your notes </h2><br/>
      <form onSubmit={handleClick}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChange}
            value={note.email}
            className="form-control"
            required
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={note.password}
            className="form-control"
            minLength={8}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          
          className="btn  btn-outline-light btn-warning btn-block mb-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

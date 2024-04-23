import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { useState } from "react";
import  Alert  from "./Components/Alert";
import { Landing } from "./Components/Landing";


function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert(
      // used an object inside this
      { type: type, message: message }
    );
    setTimeout(() => {
      setalert(null);
  }, 1500);
    console.log(alert)
  };
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <div>
            <Navbar />
             <Alert alert = {alert}/>
            
            
            <div className="container">
              <Routes>
              <Route path={"/landing"} element={<Landing/>} />
             
                <Route path={"/"} element={<Home  showAlert = {showAlert}/>} />
                <Route path={"/About"} element={<About />} />
                <Route path={"/signup"} element={<SignUp alert = {alert}showAlert = {showAlert}/>} />
                <Route path={"/login"} element={<Login alert = {alert}showAlert = {showAlert}/>} />

              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

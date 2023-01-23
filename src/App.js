import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/About"} element={<About />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;

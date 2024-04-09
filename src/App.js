// App.js

import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import SidemenuBar from "./components/SidemenuBar";
import NewRouter from "./NewRouter";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";

const App = () => {
  const childRef = useRef();

  return (
    <div>
      <NoteState>
        {/* usecontext is used here */}
        <Router>
          <NewRouter />
        </Router>
      </NoteState>
    </div>
  );
};

export default App;

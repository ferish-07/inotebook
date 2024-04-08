// App.js

import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import SidemenuBar from "./components/SidemenuBar";
import NewRouter from "./NewRouter";

const App = () => {
  const childRef = useRef();

  return (
    <Router>
      <SidemenuBar />
      <NewRouter />
    </Router>
  );
};

export default App;

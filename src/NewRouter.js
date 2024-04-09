import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Login from "./screens/Login";
import SidemenuBar from "./components/SidemenuBar";
import AddNotes from "./screens/AddNotes";

export default function NewRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddNotes" element={<AddNotes />} />
      </Routes>
    </div>
  );
}

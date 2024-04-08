import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

export default function NewRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

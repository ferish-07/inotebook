import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import SidemenuBar from "../components/SidemenuBar";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/About");
    } else {
      navigate("/Login");
    }
  }, []);
  return (
    <div>
      {localStorage.getItem("token") ? <SidemenuBar /> : null}

      <text>This is About page</text>
    </div>
  );
}

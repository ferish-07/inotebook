import React, { useEffect, useState } from "react";
import axios from "axios";
import SidemenuBar from "../components/SidemenuBar";
import draw from "../utils/images/drawerIcon.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/Login");
    }
  }, []);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <SidemenuBar />
        </>
      ) : null}
      <div className="containers">
        <text>DASHBOARD</text>
      </div>
    </div>
  );
}

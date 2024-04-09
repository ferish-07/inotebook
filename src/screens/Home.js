import React, { useEffect, useState } from "react";
import axios from "axios";
import SidemenuBar from "../components/SidemenuBar";
import draw from "../utils/images/drawerIcon.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import imageOne from "../utils/images/LoginImage.png";

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
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={imageOne}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
            }}
          />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginLeft: 5,
            }}
          >
            <text className="nameText mx-2">Ferish Modi</text>
          </div>
        </div>
        <text style={{ width: "10%" }}>
          token: {localStorage.getItem("token")}
        </text>
      </div>
    </div>
  );
}

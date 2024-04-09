import React from "react";
import "./Navbar.css";
import draw from "../utils/images/drawerIcon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ toggleDrawer }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <text className="icon mx-3" onClick={() => toggleDrawer("left", true)}>
          <img src={draw} style={{ width: 25, height: 25 }} />
        </text>
        <text className="title-style">INoteBook</text>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link
                class={`nav-link ${location.pathname == "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class={`nav-link ${
                  location.pathname == "/About" ? "active" : ""
                }`}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {!localStorage.getItem("token") ? (
          <div>
            <button className="btn btn-primary mx-2">Login</button>
            <button className="btn btn-primary mx-2">Sign Up</button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-primary mx-2"
              onClick={() => {
                navigate("/Login");
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

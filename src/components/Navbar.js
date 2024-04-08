import React from "react";
import "./Navbar.css";
import draw from "../utils/images/drawerIcon.png";
import { Link } from "react-router-dom";

export default function Navbar({ toggleDrawer }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <text className="icon">
          <img src={draw} style={{ width: 25, height: 25 }} />
        </text>
        <text>INoteBook</text>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <text>Login</text>
        </div>
      </nav>
    </div>
  );
}

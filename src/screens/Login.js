import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/sidemenubar")}>Login</button>
    </div>
  );
}

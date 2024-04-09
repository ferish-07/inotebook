import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import imageOne from "../utils/images/LoginImage.png";
import imageTwo from "../utils/images/Login_2.png";

export default function Login() {
  const navigate = useNavigate();

  const [SignUp, setSignUp] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="mainContainer">
      <div className="imageContainers">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={imageOne} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={imageTwo} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="formContainer">
        {!SignUp ? (
          <form
            style={{
              // backgroundColor: "red",
              borderRadius: 10,
              width: "50%",
              padding: 10,
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              // height: "50%",
            }}
            onSubmit={(e) => {
              e.preventDefault();

              console.log("-=-LOGIN=-");
              localStorage.setItem("token", "12344");
              navigate("/");
            }}
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div
              style={{
                // backgroundColor: "red",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="submit" class="btn btn-primary w-50">
                Login
              </button>
            </div>
          </form>
        ) : (
          <form
            style={{
              // backgroundColor: "red",
              borderRadius: 10,
              width: "50%",
              padding: 10,
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              // height: "50%",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("-=-SIGN IN=-");
            }}
          >
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div
              style={{
                // backgroundColor: "red",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button type="submit" class="btn btn-primary w-50">
                Register
              </button>
            </div>
          </form>
        )}
        <div
          style={{
            width: "50%",
            alignContent: "flex-end",
            justifyContent: "flex-end",
            display: "flex",
            padding: 5,
          }}
        >
          <text
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => setSignUp(!SignUp)}
          >
            {!SignUp ? "Don't have a Account? Sign Up" : "Back to Login"}
          </text>
        </div>
      </div>
    </div>
  );
}

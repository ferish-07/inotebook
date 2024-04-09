import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import imageOne from "../utils/images/LoginImage.png";
import imageTwo from "../utils/images/Login_2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  RegisterAction,
  loginAction,
  resetAction,
} from "../redux/actions/LoginAction";
import { LOGIN_SUCCESS } from "../redux/Types";
export default function Login() {
  const { loginResponse, registerResponse } = useSelector(
    (store) => store.LoginReducer
  );
  const navigate = useNavigate();

  const [SignUp, setSignUp] = useState(false);
  const [Logincredential, setLoginCredential] = useState({
    email: null,
    password: null,
  });
  const [registerCred, setregisterCred] = useState({
    name: null,
    email: null,
    password: null,
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (loginResponse) {
      if (!loginResponse.error_status) {
        alert(loginResponse?.message);
        dispatch(resetAction(LOGIN_SUCCESS));
        navigate("/");
        localStorage.setItem("token", JSON.stringify(loginResponse.token));
      } else {
        alert(loginResponse?.message);
        dispatch(resetAction(LOGIN_SUCCESS));
      }
    }
  }, [loginResponse]);
  useEffect(() => {
    if (registerResponse) {
      if (!registerResponse.error_status) {
        alert(registerResponse?.message);
        console.log("-------registerResponse------------------");

        setSignUp(false);
      } else {
        alert(registerResponse?.message);
      }
    }
  }, [registerResponse]);
  const dispatch = useDispatch();

  const clickLogin = () => {
    if (!Logincredential.email) {
      alert("Please Enter the Emailss");
    } else if (!Logincredential.password) {
      alert("Please Enter the Password");
    } else {
      dispatch(
        loginAction("http://localhost:8080/api/auth/login", {
          password: Logincredential.password,
          email: Logincredential.email,
        })
      );
    }
  };
  const clickRegister = () => {
    if (!registerCred.name) {
      alert("Please Enter the Full Name");
    } else if (!registerCred.email) {
      alert("Please Enter the Emailss");
    } else if (!registerCred.password) {
      alert("Please Enter the Password");
    } else {
      dispatch(
        RegisterAction("http://localhost:8080/api/auth/createUser", {
          name: registerCred.name,
          password: registerCred.password,
          email: registerCred.email,
        })
      );
    }
  };
  return (
    <div className="mainContainer">
      <div className="imageContainers">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imageOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={imageTwo} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
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
              clickLogin();
              console.log("-=-LOGIN=-");
              // localStorage.setItem("token", "12344");
              // navigate("/");
            }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={Logincredential.email}
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setLoginCredential({
                    ...Logincredential,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={Logincredential.password}
                onChange={(e) =>
                  setLoginCredential({
                    ...Logincredential,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
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
              <button type="submit" className="btn btn-primary w-50">
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
              clickRegister();
              console.log("-=-SIGN IN=-");
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                value={registerCred.name}
                name="name"
                onChange={(e) => {
                  setregisterCred({
                    ...registerCred,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                value={registerCred.email}
                onChange={(e) => {
                  setregisterCred({
                    ...registerCred,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={registerCred.password}
                onChange={(e) => {
                  setregisterCred({
                    ...registerCred,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
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
              <button type="submit" className="btn btn-primary w-50">
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import SidemenuBar from "../components/SidemenuBar";
import draw from "../utils/images/drawerIcon.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AddNotes() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/AddNotes");
    } else {
      navigate("/Login");
    }
  }, []);

  const [formData, setFormData] = useState({ title: "", description: "" });
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/notes/getnotes", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMzg5NzMzYzAxNGUyMzBkMDc1YjM2In0sImlhdCI6MTcxMjU3MDY0OX0.imTRZJNluW084CDXAG-qQ9YVIPrIJIshVuDu4yFU-H8",
  //       },
  //     })
  //     .then((response) => {
  //       console.log("-=-RESPONS=", response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  const handleSave = (e) => {
    e.preventDefault();
    console.log("first", formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <SidemenuBar />
        </>
      ) : null}
      <div className="container ">
        <form
          onClick={(e) => {
            handleSave(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              name="title"
              onChange={handleChange}
              value={formData.title}
            />
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              rows={3}
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              formData.title.length > 0 && formData.description.length > 0
                ? false
                : true
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

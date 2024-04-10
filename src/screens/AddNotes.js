import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import SidemenuBar from "../components/SidemenuBar";
import draw from "../utils/images/drawerIcon.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addNotesAction, resetAction } from "../redux/actions/AddNotesAction";
import { ADD_NOTES_SUCCESS } from "../redux/Types";

import Alerts from "../components/Alert";

export default function AddNotes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const { addNotesResponse } = useSelector((store) => store.NotesReducer);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/AddNotes");
    } else {
      navigate("/Login");
    }
  }, []);
  useEffect(() => {
    if (addNotesResponse) {
      console.log(
        "-----------------------------------------------",
        addNotesResponse
      );
      dispatch(resetAction(ADD_NOTES_SUCCESS));
    }
  }, [addNotesResponse]);
  const [formData, setFormData] = useState({
    title: null,
    description: null,
    tag: null,
  });

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
    toast.current.show("HERE IS THE MESS");
    e.preventDefault();
    // if (!formData.title) {
    //   alert("Title Is compulsory");
    // } else if (!formData.description) {
    //   alert("Desc is compulsory!!");
    // } else {
    //   dispatch(
    //     addNotesAction("http://localhost:8080/api/notes/addNotes", formData)
    //   );
    // }
    console.log("first", formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toast = useRef();
  return (
    <div>
      {localStorage.getItem("token") ? (
        <>
          <SidemenuBar />
        </>
      ) : null}
      <Alerts message={"dada"} ref={toast} />
      <div className="container ">
        <form
          onSubmit={(e) => {
            handleSave(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="tag"
              className="form-control"
              id="tag"
              name="tag"
              onChange={handleChange}
              value={formData.tag}
            />
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
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
              formData?.title?.length > 0 && formData?.description?.length > 0
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

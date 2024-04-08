import React from "react";
import NoteContext from "./notesContext";

const NoteState = (props) => {
  const state = {
    name: "Ferish",
    class: "5b",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;

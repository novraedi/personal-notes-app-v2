import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

export default function AddNotePage() {
  const navigate = useNavigate();

  function onAddNoteHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return <NoteInput addNote={onAddNoteHandler} />;
}

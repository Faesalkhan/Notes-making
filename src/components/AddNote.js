import React, { useState } from "react";

const AddNote = ({ addingNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleSave = () => {
    if (noteText.trim().length !== 0) {
      addingNote(noteText);
    } else {
      alert("create note");
    }
    setNoteText("");
  };
  return (
    <div className="col-4 my-3">
      <div className="d-flex flex-column justify-content-between rounded-5 p-3 add-note note">
        <textarea
          value={noteText}
          rows={7}
          onChange={(e) => setNoteText(e.target.value)}
          className="bg-transparent border-0"
          placeholder="create note..."
        ></textarea>
        <div className="d-flex justify-content-between ">
          <p>Today</p>
          <button
            className="btn btn-sm btn-light rounded-5 "
            onClick={handleSave}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;

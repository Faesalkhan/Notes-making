import React, { useState } from "react";
const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleSaveNote = () => {
    if (noteText.trim().length !== 0) {
      addNote(noteText);
      setNoteText("");
    } else {
      alert("create note");
    }
  };
  return (
    <div className="col-xs-6 col-sm-4 my-2">
      <div className="d-flex flex-column justify-content-between bg-info note p-2 rounded-4">
        <textarea
          placeholder="type note here..."
          rows={7}
          className="bg-transparent border-0 "
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-between align-items-center  ">
          <span>date</span>
          <button className="btn btn-light rounded-5" onClick={handleSaveNote}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;

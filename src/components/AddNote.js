import React, { useState } from "react";
const AddNote = ({ handleAddNote }) => {
  const characterLimit = 200;
  const [noteText, setNoteText] = useState("");
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length !== 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="col-4 my-2">
      <div className="p-3 note rounded-3 bg-info d-flex flex-column justify-content-between ">
        <textarea
          className="bg-info border-0"
          placeholder="type here..."
          rows="6"
          value={noteText}
          onChange={handleChange}
        ></textarea>
        <div className="d-flex justify-content-between ">
          <span>{characterLimit - noteText.length} remaining</span>
          <button className="btn btn-light rounded-5" onClick={handleSaveClick}>
            ➕
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddNote;

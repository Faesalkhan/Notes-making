import React from "react";
const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="col-4 my-2">
      <div className="p-3 note rounded-3 bg-warning d-flex flex-column justify-content-between ">
        <p className="bg-warning border-0">{text}</p>
        <div className="d-flex justify-content-between ">
          <span>{date}</span>
          <button
            className="btn btn-light rounded-5 border-0"
            onClick={() => handleDeleteNote(id)}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;

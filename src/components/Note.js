import React from "react";
const Note = ({ id, text, date, deleteNote }) => {
  const handleDelete = () => {
    deleteNote(id);
  };
  return (
    <div className="col-xs-6 col-sm-4 my-2">
      <div className="d-flex flex-column justify-content-between bg-warning note p-2 rounded-4">
        <p placeholder="type note here..." className="bg-transparent border-0 ">
          {text}
        </p>
        <div className="d-flex justify-content-between align-items-center  ">
          <span>{date}</span>
          <button className="btn btn-light rounded-5" onClick={handleDelete}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};
export default Note;

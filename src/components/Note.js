import React from "react";

const Note = ({ note, deletingNote, editingNote }) => {
  const handleDelete = () => {
    deletingNote(note);
  };
  const handleEdit = () => {
    editingNote(note);
  };
  return (
    <div className="col-4 my-3">
      <div className="d-flex flex-column justify-content-between rounded-5 p-3 note-background note">
        <p className="bg-transparent border-0 " placeholder="create note...">
          {note.text}
        </p>
        <div className="d-flex justify-content-between ">
          <p>{note.date}</p>
          <div className="d-flex">
            <button
              className="btn btn-sm rounded-5 btn-light mx-1"
              onClick={handleEdit}
            >
              ✍️
            </button>
            <button
              className="btn btn-sm rounded-5 btn-light"
              onClick={handleDelete}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Note;

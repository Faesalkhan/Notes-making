import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({ notes, addNote, deleteNote, allnotes }) => {
  return (
    <div className="continer">
      <div className="row ">
        {(allnotes.length !== 0 ? allnotes : notes).map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            deleteNote={deleteNote}
          />
        ))}
        <AddNote addNote={addNote} />
      </div>
    </div>
  );
};
export default NoteList;

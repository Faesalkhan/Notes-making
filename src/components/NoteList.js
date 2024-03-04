import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import Search from "./Search";
const NoteList = () => {
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Date.now(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = (allNotes.length !== 0 ? allNotes : notes).filter(
      (note) => note.id !== id
    );
    setNotes(newNotes);
    setAllNotes(newNotes);
  };
  return (
    <div className="container">
      <Search
        notes={notes}
        allNotes={allNotes}
        setAllNotes={setAllNotes}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="row">
        {(allNotes.length !== 0 ? allNotes : notes).map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={deleteNote}
          />
        ))}
        <AddNote handleAddNote={addNote} />
      </div>
    </div>
  );
};
export default NoteList;

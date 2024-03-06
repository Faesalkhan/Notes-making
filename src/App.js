import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NoteList from "./components/NoteList";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [allnotes, setAllNotes] = useState([]);
  const [darkmode, setDarkmode] = useState(false);
  const addNote = (xnotetext) => {
    const dt = new Date();
    const newNote = {
      id: Date.now(),
      text: xnotetext,
      date: dt.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (xid) => {
    const updatednotes = notes.filter((note) => note.id !== xid);
    setNotes(updatednotes) || setAllNotes(updatednotes);
  };
  const updateSearch = (searching) => {
    const updated = notes.filter((note) => note.text.includes(searching));
    setAllNotes(updated);
  };

  return (
    <div className={`${darkmode && "dark-mode"} `}>
      <div className="container appContainer ">
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <Search updateSearch={updateSearch} />
        <NoteList
          notes={notes}
          allnotes={allnotes}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NoteList from "./components/NoteList";

const App = () => {
  const today = new Date();
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const addingNote = (xnotetext) => {
    const newNote = {
      id: Date.now(),
      text: xnotetext,
      date: today.toLocaleDateString(),
    };
    const notesAll = [...notes, newNote];
    setNotes(notesAll);
    setAllNotes(notesAll);
  };
  const deletingNote = (xnote) => {
    const updatedNotes = notes.filter((note) => note.id !== xnote.id);
    setNotes(updatedNotes);
    setAllNotes(updatedNotes);
  };
  const [editId, setEditid] = useState(null);
  const [editNote, setEditnote] = useState({
    id: "",
    text: "",
    date: "",
  });
  const editingNote = (xnote) => {
    setEditid(xnote.id);
    const noteVals = {
      id: xnote.id,
      text: xnote.text,
      date: xnote.date,
    };
    setEditnote(noteVals);
  };

  const saveEditNote = () => {
    const editedNote = {
      id: editId,
      text: editNote.text,
      date: editNote.date,
    };
    const updated = notes.map((note) => {
      if (note.id === editId) {
        return editedNote;
      }
      return note;
    });
    setNotes(updated);
    setAllNotes(updated);
    setEditid(null);
  };
  const [search, setSearch] = useState("");
  const updateSearch = (searching) => {
    const filtered = notes.filter((note) => note.text.includes(searching));
    setAllNotes(filtered);
  };
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`${darkmode && "dark-mode"}`}>
      <div className="appContainer">
        <Header darkmode={darkmode} setDarkmode={setDarkmode} />
        <Search
          search={search}
          setSearch={setSearch}
          updateSearch={updateSearch}
        />
        <NoteList
          notes={notes}
          addingNote={addingNote}
          deletingNote={deletingNote}
          editingNote={editingNote}
          editId={editId}
          setEditid={setEditid}
          saveEditNote={saveEditNote}
          editNote={editNote}
          setEditnote={setEditnote}
          allNotes={allNotes}
          setAllNotes={setAllNotes}
        />
      </div>
    </div>
  );
};
export default App;

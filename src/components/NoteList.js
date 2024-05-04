import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import EditableNote from "./EditableNote";

const NoteList = ({
  notes,
  addingNote,
  deletingNote,
  editingNote,
  editId,
  setEditid,
  saveEditNote,
  editNote,
  setEditnote,
  allNotes,
  setAllNotes,
}) => {
  return (
    <div className="container my-3">
      <div className="row">
        {(allNotes.length !== 0 ? allNotes : notes).map((note) => (
          <>
            {note.id === editId ? (
              <EditableNote
                setEditid={setEditid}
                saveEditNote={saveEditNote}
                editNote={editNote}
                setEditnote={setEditnote}
              />
            ) : (
              <Note
                note={note}
                deletingNote={deletingNote}
                editingNote={editingNote}
              />
            )}
          </>
        ))}
        <AddNote addingNote={addingNote} />
      </div>
    </div>
  );
};
export default NoteList;

import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({
  notes,
  addingNote,
  deletingNote,
  editingNote,
  saveEditNote,
  editNote,
  setEditnote,
  allNotes,
}) => {
  return (
    <div className="container my-3">
      <div className="row flex-column-reverse flex-sm-row">
        {(allNotes.length !== 0 ? allNotes : notes).map((note) => (
          <>
            <Note
              note={note}
              deletingNote={deletingNote}
              editingNote={editingNote}
              editNote={editNote}
              saveEditNote={saveEditNote}
              setEditnote={setEditnote}
            />
          </>
        ))}
        <AddNote addingNote={addingNote} />
      </div>
    </div>
  );
};
export default NoteList;

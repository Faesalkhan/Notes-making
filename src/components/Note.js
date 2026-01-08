import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Note = ({
  note,
  deletingNote,
  editingNote,
  setEditnote,
  editNote,
  saveEditNote,
}) => {
  const [isEdit, setIsedit] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setIsedit(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deletingNote(note);
  };

  const handleEdit = (e) => {
    setIsedit(true);
    editingNote(note);
  };
  const savedEditedNote = () => {
    saveEditNote();
    setIsedit(false);
    setShow(false);
  };
  return (
    <div className="col col-sm-6 col-md-4 my-3 hover-class">
      <div
        className="d-flex flex-column justify-content-between rounded-2 p-3 note-background note shadow"
        onClick={handleShow}
      >
        <p
          className="bg-transparent border-0 overflow-hidden word-wrap "
          placeholder="create note..."
        >
          {note.text.length > 130
            ? note.text.slice(0, 130) + " ...."
            : note.text}
        </p>
        <div className="d-flex justify-content-between ">
          <p>{note.date}</p>
          <div className="d-flex">
            {/* <button
              className="btn btn-sm rounded-5 btn-light mx-1"
              onClick={handleEdit}
            >
              ✍️
            </button> */}
            <Button
              variant="danger"
              className="fw-bold rounded-3"
              onClick={handleDelete}
            >
              🗑️Delete
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">
            {note.text.slice(0, 10) + "..."}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {isEdit ? (
            <>
              <textarea
                rows={8}
                value={editNote.text}
                onChange={(e) =>
                  setEditnote({ ...editNote, text: e.target.value })
                }
                className="form-control bg-transparent rounded-3 p-2 w-100"
              ></textarea>
            </>
          ) : (
            note.text
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="fw-bold" onClick={handleClose}>
            Close
          </Button>
          {isEdit ? (
            <Button
              variant="success"
              className="fw-bold"
              onClick={savedEditedNote}
            >
              Save
            </Button>
          ) : (
            <Button variant="primary" className="fw-bold" onClick={handleEdit}>
              ✍️Edit
            </Button>
          )}{" "}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Note;

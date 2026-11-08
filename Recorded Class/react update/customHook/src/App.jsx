import { Fragment, useEffect, useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const getNotes = () => {
    fetch(`http://localhost:3000/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    getNotes();
  }, []);

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (noteTitle.trim() === "") {
      return alert(`Please provide a valid title`);
    }

    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newNote = {
      id: crypto.randomUUID(),
      title: noteTitle,
    };

    fetch(`http://localhost:3000/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: { "Content-Type": "application/json" },
    }).then(() => getNotes());

    setNoteTitle("");
  };

  const removeHandler = (noteId) => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getNotes();

      // If the note being deleted is the one currently being edited, reset form

      if (editableNote?.id === noteId) {
        setEditMode(false);
        setEditableNote(null);
        setNoteTitle("");
      }
    });
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const updateHandler = () => {
    if (!editableNote) return;

    const { id, ...rest } = editableNote;
    const updatedNote = { ...rest, title: noteTitle };

    fetch(`http://localhost:3000/notes/${editableNote.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      getNotes();
      setEditMode(false);
      setNoteTitle("");
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={changeTitleHandler} />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>

      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
          {notes.map((note) => (
            <Fragment key={note.id}>
              <li>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
              <br />
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

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

    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  const removeHandler = (noteId) => {
    const updatedNote = notes.filter((item) => item.id !== noteId);
    setNotes(updatedNote);
  };

  const editHandler = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((item) => {
      if (item.id === editableNote.id) {
        return {
          ...item,
          title: noteTitle,
        };
      }
      return item;
    });

    setNotes(updatedNotes);
    setEditMode(false);
    setNoteTitle("");
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
            <>
              <li key={note.id}>
                <span>{note.title}</span>
                <button onClick={() => editHandler(note)}>Edit</button>
                <button onClick={() => removeHandler(note.id)}>Delete</button>
              </li>
              <br />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

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

    const newNote = {
      id: crypto.randomUUID(),
      title: noteTitle,
    };

    setNotes([...notes, newNote]);
    setNoteTitle("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={changeTitleHandler} />
        <button type="submit">Add Note</button>
      </form>

      <div className="note-list">
        <h2>All Notes</h2>
        <ul>
          {notes.map((note) => (
            <>
              <li key={note.id}>
                <span>{note.title}</span>
                <button>Edit</button>
                <button>Delete</button>
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

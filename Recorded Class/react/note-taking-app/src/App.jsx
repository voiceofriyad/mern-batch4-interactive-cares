import { useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const noteCreateHandler = (event) => {
    event.preventDefault();
    if (noteTitle) {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        isComplete: false,
      };

      setNotes([...notes, newNote]);
      setNoteTitle("");
    } else {
      alert("Please enter a valid title");
    }
  };

  const deleteHandler = (noteId) => {
    const newNotes = notes.filter((item) => item.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (noteId) => {
    const toBeEditedNote = notes.find((item) => item.id === noteId);
    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setNoteTitle(toBeEditedNote.title);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    setNotes(
      notes.map((item) => {
        if (item.id === editableNote.id) {
          item.title = noteTitle;
        }
        return item;
      }),
    );
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };
  return (
    <div className="App">
      <form
        action=""
        onSubmit={(event) => {
          editMode ? updateHandler(event) : noteCreateHandler(event);
        }}
      >
        <input
          type="text"
          placeholder="Please Enter a valid title"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
      </form>

      <ul>
        {notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button onClick={() => editHandler(note.id)}>Edit</button>
            <button onClick={() => deleteHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

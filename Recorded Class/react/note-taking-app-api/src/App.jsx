import { useState, useEffect } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const noteCreateHandler = (event) => {
    event.preventDefault();
    if (noteTitle) {
      const newNote = {
        // id: Date.now() + "",
        id: crypto.randomUUID(),
        title: noteTitle,
        isComplete: false,
      };

      // setNotes([...notes, newNote]);
      fetch(`http://localhost:3000/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      }).then(() => {
        getNotes();
      });

      setNoteTitle("");
    } else {
      alert("Please enter a valid title");
    }
  };

  const deleteHandler = (noteId) => {
    // const newNotes = notes.filter((item) => item.id !== noteId);
    // setNotes(newNotes);

    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getNotes();
    });
  };

  const editHandler = (noteId) => {
    const toBeEditedNote = notes.find((item) => item.id === noteId);
    if (!toBeEditedNote) return;

    setEditMode(true);
    setEditableNote(toBeEditedNote);
    setNoteTitle(toBeEditedNote.title);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    /* setNotes(
      notes.map((item) => {
        if (item.id === editableNote.id) {
          item.title = noteTitle;
        }
        return item;
      }),
    ); */

    if (!editableNote) return;
    const toBeUpdatedNote = {
      id: editableNote.id,
      title: noteTitle,
      isComplete: editableNote.isComplete,
    };
    fetch(`http://localhost:3000/notes/${editableNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toBeUpdatedNote),
    }).then(() => {
      getNotes();
      setEditMode(false);
      setEditableNote(null);
      setNoteTitle("");
    });
  };

  const getNotes = () => {
    fetch(`http://localhost:3000/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    getNotes();
  }, []);

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
          <li key={note.id}>
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

import { useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);

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

  return (
    <div className="App">
      <form action="" onSubmit={noteCreateHandler}>
        <input
          type="text"
          placeholder="Please Enter a valid title"
          value={noteTitle}
          onChange={(event) => setNoteTitle(event.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>

      <ul>
        {notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

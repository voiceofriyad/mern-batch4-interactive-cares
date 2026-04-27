import { useState } from "react";

function Form({ onCreateNote }) {
  const [noteTitle, setNoteTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!noteTitle.trim()) {
      alert("Please enter a valid title");
      return;
    }

    onCreateNote(noteTitle);
    setNoteTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle} />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;

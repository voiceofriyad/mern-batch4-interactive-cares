function NoteList({ notes, onRemoveNote, onEditNote }) {
  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => onEditNote(note)}>Edit</button>
            <button onClick={() => onRemoveNote(note.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;

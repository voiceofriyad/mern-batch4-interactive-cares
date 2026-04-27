import { useReducer, useState } from "react";
import reducer, { initState } from "./reducer/noteReducer";
import Form from "./component/Form";
import NoteList from "./component/NoteList";
import EditNote from "./component/EditNote";

function App() {
  const [noteStates, dispatch] = useReducer(reducer, initState);
  const [editableNote, setEditableNote] = useState(null);

  const handleCreateNote = (note) => {
    dispatch({ type: "CREATE_NOTE", payload: note });
  };

  const handleRemoveNote = (id) => {
    dispatch({ type: "REMOVE_NOTE", payload: { id: id } });
  };

  const handleEditNote = (note) => {
    setEditableNote(note);
  };

  const handleUpdateNote = (note) => {
    dispatch({ type: "UPDATE_NOTE", payload: { ...note, title: note.title } });
    setEditableNote(null);
  };

  return (
    <div className="App">
      <Form onCreateNote={handleCreateNote} />
      <NoteList
        notes={noteStates}
        onRemoveNote={handleRemoveNote}
        onEditNote={handleEditNote}
      />
      {editableNote && (
        <EditNote
          editableNote={editableNote}
          onUpdate={handleUpdateNote}
          onClose={() => {
            setEditableNote(null);
          }}
        />
      )}
    </div>
  );
}

export default App;

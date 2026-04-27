import { useReducer } from "react";

const initState = {
  noteTitle: "",
  notes: [],
  editableNote: null,
  editMode: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TITLE": {
      return {
        ...state,
        noteTitle: action.payload.title,
        error: null, // Clear error when typing
      };
    }
    case "CREATE_NOTE": {
      /*  if (!state.noteTitle.trim()) {
        // ✅ Check in component instead
        return {
          ...state,
          error: "Please enter a valid title", // ✅ Set error state
        };
      } */

      if (state.noteTitle) {
        const newNote = {
          id: crypto.randomUUID(),
          title: action.payload.title,
          isComplete: false,
        };

        return {
          ...state,
          notes: [...state.notes, newNote],
          noteTitle: "",
          error: null,
        };
      } else {
        alert("Please enter a valid title");
        return {
          ...state,
        };
      }
    }
    case "EDIT_NOTE": {
      const toBeEditedNote = state.notes.find(
        (item) => item.id === action.payload.id,
      );

      return {
        ...state,
        noteTitle: toBeEditedNote.title,
        editMode: true,
        editableNote: toBeEditedNote,
        error: null,
      };
    }
    case "UPDATE_NOTE": {
      if (!state.noteTitle.trim()) {
        return {
          ...state,
          error: "Please enter a valid title",
        };
      }

      return {
        ...state,
        /* notes: state.notes.map((item) => {
          if (item.id === state.editableNote.id) {
            item.title = action.payload.title; // ❌ Mutating!
          }
          return item;
        }), */
        notes: state.notes.map((item) =>
          item.id === state.editableNote.id
            ? { ...item, title: action.payload.title } // ✅ Create new object
            : item,
        ),
        editMode: false,
        editableNote: null,
        noteTitle: "",
        error: null,
      };
    }
    case "REMOVE_NOTE": {
      const newNotes = state.notes.filter(
        (item) => item.id !== action.payload.id,
      );

      return {
        ...state,
        notes: newNotes,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
function App() {
  const [noteStates, dispatch] = useReducer(reducer, initState);

  /* const [noteTitle, setNoteTitle] = useState("");
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
  }; */

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          noteStates.editMode
            ? dispatch({
                type: "UPDATE_NOTE",
                payload: { title: noteStates.noteTitle },
              })
            : dispatch({
                type: "CREATE_NOTE",
                payload: {
                  title: noteStates.noteTitle,
                },
              });
        }}
      >
        <input
          type="text"
          placeholder="Please Enter a valid title"
          value={noteStates.noteTitle}
          onChange={(event) =>
            dispatch({
              type: "CHANGE_TITLE",
              payload: { title: event.target.value },
            })
          }
        />
        <button type="submit">
          {noteStates.editMode ? "Update Note" : "Add Note"}
        </button>
      </form>

      <ul>
        {noteStates.notes.map((note) => (
          <li>
            <span>{note.title}</span>
            <button
              onClick={() =>
                dispatch({ type: "EDIT_NOTE", payload: { id: note.id } })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_NOTE", payload: { id: note.id } })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

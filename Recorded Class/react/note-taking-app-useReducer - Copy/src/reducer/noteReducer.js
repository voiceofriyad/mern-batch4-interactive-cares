export const initState = [];
/* export const initState = {
    notes: []
} */

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NOTE": {
      const newNote = {
        id: crypto.randomUUID(),
        title: action.payload,
        isComplete: false,
      };

      return [...state, newNote];
    }

    case "UPDATE_NOTE": {
      console.log(action.payload);
      let notes = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
      return notes;
    }

    case "REMOVE_NOTE": {
      const remainNotes = state.filter((item) => item.id !== action.payload.id);

      return remainNotes;
    }
    default: {
      return [];
    }
  }
};

export default reducer;

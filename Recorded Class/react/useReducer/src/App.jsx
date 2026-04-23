import { useReducer } from "react";
import "./App.css";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase_counter": {
        return state + action.payload;
      }

      case "decrease_counter": {
        return state - action.payload;
      }

      default: {
        return state;
      }
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="App">
        <p>The value of the counter is {counter}</p>
        <button
          onClick={() => dispatch({ type: "increase_counter", payload: 1 })}
        >
          Increase By One
        </button>
        <button
          onClick={() => dispatch({ type: "increase_counter", payload: 5 })}
        >
          Increase By Five
        </button>
        <button
          onClick={() => dispatch({ type: "increase_counter", payload: 10 })}
        >
          Increase By Ten
        </button>
        <button
          onClick={() => dispatch({ type: "decrease_counter", payload: 1 })}
        >
          Decrease By One
        </button>
      </div>
    </>
  );
}

export default App;

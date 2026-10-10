import { useReducer } from "react";

const counterReducer = (state, action) => {
  // console.log(state, "state");
  // console.log(action, "action");
  // return state;

  // if (action === "increase_counter") {
  //   return state + 1;
  // } else if (action === "decrease_counter") {
  //   return state - 1;
  // }

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

function App() {
  const [counter, dispatch] = useReducer(counterReducer, 10);

  return (
    <>
      <p>The value of the counter is {counter}</p>
      <button
        onClick={() => dispatch({ type: "increase_counter", payload: 1 })}
      >
        Increase By 1
      </button>
      <button
        onClick={() => dispatch({ type: "decrease_counter", payload: 1 })}
      >
        Decrease By 1
      </button>
      <button
        onClick={() => dispatch({ type: "increase_counter", payload: 5 })}
      >
        Increase By 5
      </button>
      <button
        onClick={() => dispatch({ type: "decrease_counter", payload: 3 })}
      >
        Decrease By 3
      </button>
    </>
  );
}

export default App;

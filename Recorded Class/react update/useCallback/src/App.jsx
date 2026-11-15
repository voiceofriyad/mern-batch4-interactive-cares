import { useState } from "react";
import Title from "./components/Title";
import CounterAppTitle from "./components/CounterAppTitle";

function App() {
  console.log("I am app");

  const [counter, setCounter] = useState(10);
  const [counter2, setCounter2] = useState(50);

  const increaseCounter = () => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const increaseCounter2 = () => {
    // setCounter2(counter2 + 3);
    setCounter2((prevCounter2) => prevCounter2 + 3);
  };

  return (
    <>
      <Title />

      <div className="counter-app-1">
        <CounterAppTitle value={counter} />
        <button onClick={increaseCounter}>Increase By 1</button>
      </div>

      <hr />

      <div className="counter-app-2">
        <CounterAppTitle value={counter2} />
        <button onClick={increaseCounter2}>Increase By 3</button>
      </div>
    </>
  );
}

export default App;

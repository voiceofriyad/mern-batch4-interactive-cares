import { useState, useCallback } from "react";
import Button from "./components/Button";
import CounterAppTitle from "./components/CounterAppTitle";
import Title from "./components/Title";

function App() {
  console.log("I am app");

  const [counter, setCounter] = useState(10);
  const [counter2, setCounter2] = useState(50);

  const increaseCounter = useCallback(() => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const increaseCounter2 = useCallback(() => {
    // setCounter2(counter2 + 3);
    setCounter2((prevCounter2) => prevCounter2 + 3);
  }, []);

  return (
    <>
      <Title />

      <div className="counter-app-1">
        <CounterAppTitle value={counter} />
        <Button handler={increaseCounter} />
      </div>

      <hr />

      <div className="counter-app-2">
        <CounterAppTitle value={counter2} />
        <Button handler={increaseCounter2} />
      </div>
    </>
  );
}

export default App;

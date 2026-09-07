import { useState } from "react";
import Title from "./components/Title";
import ShowCounter from "./components/ShowCounter";
import Button from "./components/Button";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseHandler1 = () => {
    setCounter1(counter1 + 1);
  };

  const increaseHandler2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <>
      <Title />

      <div>
        <ShowCounter title="counter1" counter={counter1} />
        <Button handlerFunction={increaseHandler1} />
      </div>

      <hr />

      <div>
        <ShowCounter title="counter2" counter={counter2} />
        <Button handlerFunction={increaseHandler2} />
      </div>
    </>
  );
}

export default App;

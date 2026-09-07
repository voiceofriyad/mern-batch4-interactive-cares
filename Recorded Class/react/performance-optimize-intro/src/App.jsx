import { useCallback, useState } from "react";
import Button from "./components/Button";
import ShowCounter from "./components/ShowCounter";
import Title from "./components/Title";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /* const increaseHandler1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]); */

  const increaseHandler1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, []);

  /* const increaseHandler2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]); */

  const increaseHandler2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, []);

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

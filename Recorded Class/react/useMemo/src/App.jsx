import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowCounter from "./components/ShowCounter";
import Title from "./components/Title";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increaseHandler1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, []);

  const increaseHandler2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <>
      <Title />

      <div>
        <ShowCounter title="counter1" counter={counter1} />
        <Button handlerFunction={increaseHandler1} />
        <p>{isEven ? "Counter 1 is Even" : "Counter 1 is Odd"}</p>
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

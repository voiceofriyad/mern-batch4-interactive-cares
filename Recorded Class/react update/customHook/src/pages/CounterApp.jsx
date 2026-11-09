import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(15);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>The Value of the Counter is {counter}</p>
      <button onClick={increaseHandler}>Increase By 1</button>
      <button onClick={decreaseHandler}>Decrease By 1</button>
    </div>
  );
};

export default CounterApp;

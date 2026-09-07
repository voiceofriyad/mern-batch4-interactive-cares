import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const increaseHandler = (payload) => {
    setCounter(counter + payload);
  };

  const decreaseHandler = (payload) => {
    setCounter(counter - payload);
  };

  return {
    counter,
    increaseHandler,
    decreaseHandler,
  };
}

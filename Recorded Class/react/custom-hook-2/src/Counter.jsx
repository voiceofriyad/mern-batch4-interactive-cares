import useCounter from "./useCounter";

export default function Counter() {
  const { counter, increaseHandler, decreaseHandler } = useCounter();

  return (
    <div>
      <p>The value of the Counter is {counter}</p>

      <button onClick={() => increaseHandler(1)}>Increase By One</button>

      <button onClick={() => increaseHandler(5)}>Increase By Five</button>

      <button onClick={() => decreaseHandler(1)}>Decrease By One</button>
    </div>
  );
}

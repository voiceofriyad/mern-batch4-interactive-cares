import { useState } from "react";

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => {
    // counter++;
    // console.log(counter);
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    // counter--;
    // console.log(counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="App">
        <p>The value of the counter is {counter}</p>
        <button onClick={increaseHandler}>Increase By One</button>
        <button onClick={decreaseHandler}>Decrease By One</button>
      </div>
    </>
  );
}

export default App;

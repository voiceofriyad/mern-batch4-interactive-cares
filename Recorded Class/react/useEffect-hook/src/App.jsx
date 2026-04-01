import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const [obj, setObj] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setObj(data);
        console.log(data);
      });
    console.log("I am from useEffect");
  }, []);
  console.log("I am app component");
  return (
    <>
      <section id="center">
        <h1>Hello useEffect Hook</h1>
        <p>The value of the counter is {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <p>Id - {obj?.id}</p>
        <p>Title - {obj?.title}</p>
        <p>The value of the counter is {counter2}</p>
        <button onClick={() => setCounter2(counter2 + 1)}>Increase</button>
      </section>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(10);
  const [counter2, setCounter2] = useState(20);

  // fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setPosts(data);
  //   });

  useEffect(() => {
    console.log("I am inside side-effect");

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log("I am re-rendering");

  return (
    <>
      <h2>All Post</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <p>The value of the counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase By 1</button>

      <p>The value of the counter is {counter2}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>Increase By 1</button>
    </>
  );
}

export default App;

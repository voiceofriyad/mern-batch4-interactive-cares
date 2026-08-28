import { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todo")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load`);
        }
        return res.json();
      })

      .then((data) => {
        setTodos(data);
        setLoading(false);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <div>Loading..............</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {todos.map((item) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}

export default Todos;

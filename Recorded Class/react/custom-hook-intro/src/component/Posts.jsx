import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setErrorMessage("");
      })
      .catch((err) => {
        // console.log(err.message);
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <div>Loading..............</div>}
      {errorMessage && <div>{errorMessage}</div>}
      {posts.map((item) => (
        <li>{item.title}</li>
      ))}
    </div>
  );
}

export default Posts;

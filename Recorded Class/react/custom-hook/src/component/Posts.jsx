import useFetch from "../useFetch";

function Posts() {
  const {
    data: posts,
    loading,
    errorMessage,
  } = useFetch([], `https://jsonplaceholder.typicode.com/posts`);
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

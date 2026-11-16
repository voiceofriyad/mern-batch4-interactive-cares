import useFetch from "../useFetch";

export default function Posts() {
  const {
    data: posts,
    loading,
    errorMessage,
  } = useFetch([], `https://jsonplaceholder.typicode.com/posts`);
  return (
    <div>
      {loading && <div>Loading.......</div>}

      {errorMessage && <div>{errorMessage}</div>}

      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

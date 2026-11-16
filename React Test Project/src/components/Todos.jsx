import useFetch from "../useFetch";

export default function Todos() {
  const {
    data: todos,
    loading,
    errorMessage,
  } = useFetch([], `https://jsonplaceholder.typicode.com/todos`);
  return (
    <div>
      {loading && <div>Loading</div>}

      {errorMessage && <div>{errorMessage}</div>}

      {todos.map((item) => (
        <li key={item.id}>
          {item.id} {item.title}
        </li>
      ))}
    </div>
  );
}

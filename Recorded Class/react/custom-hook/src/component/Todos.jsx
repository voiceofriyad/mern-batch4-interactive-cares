import useFetch from "../useFetch";

function Todos() {
  const {
    data: todos,
    loading,
    errorMessage,
  } = useFetch([], `https://jsonplaceholder.typicode.com/todos`);

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

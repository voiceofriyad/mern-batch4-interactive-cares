import useFetch from "../useFetch";

export default function TodoItem() {
  const {
    data: todoItem,
    loading,
    errorMessage,
  } = useFetch(null, `https://jsonplaceholder.typicode.com/todos/1`);
  return (
    <div>
      {loading && <div>Loading.......</div>}

      {errorMessage && <div>{errorMessage}</div>}

      {todoItem?.title}
    </div>
  );
}

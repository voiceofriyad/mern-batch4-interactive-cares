import useFetch from "../useFetch";

function TodoItem() {
  const {
    data: todoItem,
    loading,
    errorMessage,
  } = useFetch(null, `https://jsonplaceholder.typicode.com/todos/1`);
  return (
    <div>
      {loading && <div>Loading............</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <p>{todoItem?.title}</p>
    </div>
  );
}

export default TodoItem;

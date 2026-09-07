export default function Button({ handlerFunction }) {
  console.log("I am Button");

  return (
    <>
      <button onClick={handlerFunction}>Increase</button>
    </>
  );
}

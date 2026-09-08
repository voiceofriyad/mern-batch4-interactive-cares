import { memo } from "react";

function Button({ handlerFunction }) {
  console.log("I am Button");

  return (
    <>
      <button onClick={handlerFunction}>Increase</button>
    </>
  );
}

export default memo(Button);

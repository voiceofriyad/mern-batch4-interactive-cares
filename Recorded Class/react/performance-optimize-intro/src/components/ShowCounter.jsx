import { memo } from "react";

function ShowCounter({ title, counter }) {
  console.log("I am Show Counter");

  return (
    <>
      <p>
        The value of the {title} app is {counter}
      </p>
    </>
  );
}

export default memo(ShowCounter);

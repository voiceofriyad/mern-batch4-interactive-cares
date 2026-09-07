import { memo } from "react";

function Title() {
  console.log("I am Title");

  return (
    <>
      <h2>Our Counter App</h2>
    </>
  );
}

export default memo(Title);

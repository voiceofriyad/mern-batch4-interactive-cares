import { memo } from "react";

const Title = memo(() => {
  console.log("I am title");
  return <h2>Our Counter</h2>;
});

export default Title;

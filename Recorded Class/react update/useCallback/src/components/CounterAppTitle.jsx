import { memo } from "react";

const CounterAppTitle = memo(({ value }) => {
  console.log("I am app title");
  return <p>The value of the counter is {value}</p>;
});

export default CounterAppTitle;

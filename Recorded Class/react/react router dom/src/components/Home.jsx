import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1>I am Home Page</h1>
      <Link to="/about">Go to about page</Link>
    </>
  );
}

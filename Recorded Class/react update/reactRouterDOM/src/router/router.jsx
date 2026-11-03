import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Root from "../pages/RootLayout";

export const router = createBrowserRouter([
  // { path: "/", element: <div>This is Home Page</div> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/about", element: <About /> }],
  },
]);

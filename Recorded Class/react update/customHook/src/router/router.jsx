import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import PostDetails from "../pages/PostDetails.jsx";
import PostList from "../pages/PostList.jsx";
import Root from "../pages/RootLayout";
import UserList from "../pages/UserList.jsx";

export const router = createBrowserRouter([
  // { path: "/", element: <div>This is Home Page</div> },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/all-notes", element: <App /> },
      {
        path: "/all-posts",
        element: <PostList />,
      },
      { path: "/posts/:postId", element: <PostDetails /> },
      { path: "/all-users", element: <UserList /> },
    ],
  },
]);

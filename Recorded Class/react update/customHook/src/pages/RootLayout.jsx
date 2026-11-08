import { Link, Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      {/* <div id="detail">
        <Outlet />
      </div> */}

      <div id="sidebar">
        <h1>My SideBar</h1>

        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/all-notes`}>All Notes</Link>
            </li>
            <li>
              <Link to={`/all-posts`}>All Posts</Link>
            </li>
            {/* <li>
              <a href={`/all-notes`}>All Notes</a>
            </li> */}
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

import { Outlet, Link } from "react-router-dom";


function TopNav() {


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home  </Link>
          </li>
          <li>
            <Link to="about/">About  </Link>
          </li>
          <li>
            <Link to="characterpage/">Character  </Link>
          </li>
      </ul>
    </nav >
    </>
  )
}

export default TopNav

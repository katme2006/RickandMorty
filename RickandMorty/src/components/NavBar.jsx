import { Outlet, Link } from "react-router-dom";


function TopNav() {


  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">Home  </Link>
          </li>
          <li>
            <Link className="nav-link" to="about/">About  </Link>
          </li>
          <li>
            <Link className="nav-link" to="characterpage/">Characters  </Link>
          </li>
      </ul>
    </nav >
    </>
  )
}

export default TopNav

import { NavLink } from "react-router-dom";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/Home"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
      <NavLink
        to="/Films"
        className="nav-link"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default NavBar;
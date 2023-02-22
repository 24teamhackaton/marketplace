import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar
import {Link, NavLink} from "react-router-dom"
import Logo from "../images/Header.png"
import {links} from "../data"
import { FaBars } from "react-icons/fa6"
import "./navbar.css"


const Navbar = () => {
  return (
   <nav>
        <div className="container nav__container">
            <Link to="/" className="logo">
              <img src= {Logo} alt="Grey Mountains Logo" />
            </Link>
            <ul className="nav__links">
              {
                links.map(({name, path}, index) => {
                  return (
                    <li>
                      <NavLink to={path}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn">
              <FaBars/>
            </button>
        </div>
   </nav>
  )
}

export default Navbar

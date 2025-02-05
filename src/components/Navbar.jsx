import {Link, NavLink} from "react-router-dom"
import Logo from "../images/Header.png"
import "./navbar.css"


const Navbar = () => {
  return (
   <nav>
        <div className="container nav__container">
            <Link to="/" className="logo">
              <img src= {Logo} alt="Grey Mountains Logo" />
            </Link>
            nav links
            nav buttons
        </div>
   </nav>
  )
}

export default Navbar

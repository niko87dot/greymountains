import { useState } from "react"
import {Link, NavLink} from "react-router-dom"
import Logo from "../images/Platzhalter.png"
import {links} from "../data"
import { FaBars } from "react-icons/fa6"
import { MdOutlineClose } from "react-icons/md"
import "./navbar.css"


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
   <nav>
        <div className="container nav__container">
            <Link to="/" className="logo">
              <img src= {Logo} alt="Grey Mountains Logo" height={100} />
            </Link>
            <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__Nav"}`}>
              {
                links.map(({name, path}, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""}>{name}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
              {
                isNavShowing ? <MdOutlineClose/> : <FaBars/>
              }
            </button>
        </div>
   </nav>
  )
}

export default Navbar

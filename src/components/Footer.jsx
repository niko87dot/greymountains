import { Link } from "react-router-dom"
import Logo from "../images/Platzhalter.png"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                Frankfurter bresaola short loin, short ribs chuck salami meatball tenderloin ground round meatloaf tail boudin tongue. 
                Sirloin t-bone ribeye bacon salami drumstick capicola beef hamburger tenderloin andouille prosciutto cow kielbasa.
                </p>
                <div className="footer__socials">
                    <a href="https://www.instagram.com/greymountainsmedia" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer noopener"><FaYoutube/></a>
                </div>
            </article>
            <article>
               <h4>Permalinks</h4>
               <Link to="/about">About</Link>
               <Link to="/contact">Kontakt</Link>
               <Link to="/">Home</Link>
               <Link to="/podcast">References</Link>
            </article>
            <article>
               <h4>Permalinks</h4>
               <Link to="/about">About</Link>
               <Link to="/contact">Kontakt</Link>
               <Link to="/">Home</Link>
               <Link to="/podcast">References</Link>
            </article>
            <article>
               <h4>Permalinks</h4>
               <Link to="/about">About</Link>
               <Link to="/contact">Kontakt</Link>
               <Link to="/">Home</Link>
               <Link to="/podcast">References</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2025 Grey Mountains Media &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer

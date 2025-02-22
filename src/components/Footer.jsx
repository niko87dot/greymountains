import { Link } from "react-router-dom"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa"
import { FaSpotify } from "react-icons/fa";


const Footer = () => {
  return (
    
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="footerlogo">
                    <h1>Grey Mountains Media</h1>
                </Link>
                <p>
                Diekmannsbusch 7
                <br/>
                45289 Essen
                </p>
                <div className="footer__socials">
                    <a href="https://www.instagram.com/greymountainsmedia" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram size="30px"/></a>
                    <a href="https://www.youtube.com/channel/UC5SuYA83CD7QAIkHEtfd71w" target="_blank" rel="noreferrer noopener"><FaYoutube size="30px"/></a>
                    <a href="https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=503f516a210c4e5a" target="_blank" rel="noreferrer noopener"><FaSpotify size="30px"/></a>
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
            <small>{new Date().getFullYear()} Grey Mountains Media &copy; All Right Reserved | <a href="/agbs">AGBs</a> | <a href="/datenschutz">Datenschutz</a> | <a href="/impressum">Impressum</a></small>
        </div>
    </footer>
  )
}

export default Footer

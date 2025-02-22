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
               <h4>Navigation</h4>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Kontakt</Link>
               <Link to="/references">Work</Link>
            </article>
            <article>
               <h4>Social Media</h4>
               <Link to="https://www.instagram.com/greymountainsmedia">Instagram</Link>
               <Link to="https://www.youtube.com/channel/UC5SuYA83CD7QAIkHEtfd71w">Youtube</Link>
               <Link to="/">TikTok</Link>
            </article>
            <article>
               <h4>brandit. Podcast</h4>
               <Link to="https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=503f516a210c4e5a">Spotify</Link>
               <Link to="https://podcasts.apple.com/at/podcast/brandit/id1724738282">iTunes</Link>
               <Link to="https://www.amazon.de/music/player/podcasts/eeeaa93e-a7ce-4bcc-8d0a-6fa6ad198261/brandit">Amazon Music</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>{new Date().getFullYear()} Grey Mountains Media &copy; All Right Reserved | <a href="/agbs">AGBs</a> | <a href="/datenschutz">Datenschutz</a> | <a href="/impressum">Impressum</a></small>
        </div>
    </footer>
  )
}

export default Footer

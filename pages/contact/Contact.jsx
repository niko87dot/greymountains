import Header from "../../components/Header"
import HeaderImage from "../../images/Header_Kontakt.png"
import { AiOutlineInstagram } from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import "./contact.css"

const Contact = () => {
  return (
    <>
    <Header image={HeaderImage}>
    </Header>
    <section className="contact">
    <div className="container contact__container">
        <div className="contact__info">
          <p>
            <h1 className="contact__head">Kontakt</h1>
            <p>
              Grey Mountains Media GbR<br/>
              Diekmannsbusch 7<br/>
              45289 Essen<br/>
              +49 (0) 157 54217851
            </p>
          </p>
        </div>
        <div className="contact__wrapper">
        <div className="contact__button">
          <a href="mailto:info@greymountains.de" target="blank" rel="noreferrer noopener"><MdEmail/></a>
        </div>
        <div className="contact__button">
          <a href="https://www.instagram.com/greymountainsmedia" target="blank" rel="noreferrer noopener"><AiOutlineInstagram/></a>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact

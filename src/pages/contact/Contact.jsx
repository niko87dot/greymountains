import Header from "../../components/Header"
import HeaderImage from "../../images/Header_Kontakt.png"
import {MdEmail} from "react-icons/md"
import "./contact.css"

const Contact = () => {
  return (
    <>
    <Header image={HeaderImage}>
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:info@greymountains.de" target="blank" rel="noreferrer noopener"><MdEmail/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact

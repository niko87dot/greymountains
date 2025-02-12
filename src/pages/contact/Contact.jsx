import Header from "../../components/Header"
import HeaderImage from "../../images/header.png"
import {MdEmail} from "react-icons/md"
import "./contact.css"

const Contact = () => {
  return (
    <>
    <Header title="Kontaktieren Sie Uns!" image={HeaderImage}>
    Mouth-breather. Nobody normal ever accomplished anything meaningful in this world. 
    You're an idiot, Steve Harrington. You're beautiful, Nancy Wheeler.
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

import React from 'react'
import {Link} from "react-router-dom"
// import Image from "../images/platzhalter2.png"

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#creativagency</h4>
          <h1>Grey Mountains Media</h1>
          <p>
          Grey Mountains Media ist eine Creative Agency, die sich auf Videocontent mit strategischer Wirkung spezialisiert 
          hat. Wir produzieren Imagefilme, Recruitingvideos, Produktvorstellungen und Social Media Content, der gezielt 
          auf Unternehmensziele abgestimmt ist. Neben der Produktion übernehmen wir auch die strategische Verbreitung, 
          um Reichweite und Wirkung zu maximieren. Zusätzlich bieten wir Grafikdesign und Podcast-Produktionen, 
          um Marken ganzheitlich zu stärken. Unser Anspruch: Kreative Lösungen, die Ergebnisse liefern.

          </p>
          <Link to="/contact" className="btn lg">Kontakt</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
              {/* <img src={Image} alt="Logo" /> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

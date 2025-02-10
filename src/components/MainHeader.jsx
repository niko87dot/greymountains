import React from 'react'
import {Link} from "react-router-dom"
import Image from "../images/platzhalter2.png"

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#PLATZHALTER</h4>
          <h1>Ein weiterer Platzhalter</h1>
          <p>
          Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
          Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto. 
          Ribeye beef ribs pastrami pork, spare ribs porchetta rump drumstick prosciutto 
          filet mignon tongue frankfurter. Ball tip turkey shoulder pork chop venison, 
          filet mignon pork pancetta picanha leberkas sirloin. 
          </p>
          <Link to="/about" className="btn lg">Über uns</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
              <img src={Image} alt="Logo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

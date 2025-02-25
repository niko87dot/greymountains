import "./project.css"
import Turtle8 from "../../images/turtles/TurtleGang7.png"
import TG1 from "../../images/turtles/TG1.mp4"
import { Link } from "react-router-dom"
import Slide from "../../components/Slide"

const TurtleGang = () => {
  return (
    <section className="project">
      <div className="container project__container">
              <h1>Turtle Gang</h1>
              {/* <div className="slider">
                <div className="slider__list">
                  <div className="slider__item"><img src={Turtle1} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle2} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle3} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle4} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle5} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle6} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle7} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle9} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                  <div className="slider__item"><img src={Turtle10} alt="Turtle Gang NFTs by Grey Mountains"/></div>
                </div> 
              </div> */}
              
              <div className="slide__animation">
              <Slide/>  
              </div>
              <h2>Need</h2>
              <p>
              Für die NFT-Kollektion Turtle Gang bestand die Aufgabe darin, die komplette grafische 
              Gestaltung und Generierung der Kollektion zu übernehmen. Ziel war es, eine große Anzahl 
              einzigartiger NFTs zu erschaffen und die Kollektion vor dem Launch mit maximaler 
              Reichweite zu bewerben.
              </p>
              <h2>Unsere Herangehensweise:</h2>
              <p>
              Wir entwickelten über 2.000 individuelle NFTs mit verschiedenen Attributen, die jedes 
              Exemplar einzigartig machten. Neben der visuellen Gestaltung waren wir auch für die 
              Verbreitung und Werbung vor dem Launch verantwortlich, um so viel Aufmerksamkeit wie 
              möglich zu generieren.
              </p>
              <h2>Unsere Lösung</h2>
              <p>
              Dazu erstellten wir unter anderem Motion Graphics-Werbevideos, die sich durch ihren in 
              der Szene damals einzigartigen Retro-Look auszeichneten und große Aufmerksamkeit 
              erregten. Ergänzend setzten wir auf Influencer-Marketing: Wir übernahmen die 
              Koordination und Aufnahme von Influencern, die die Kollektion vor dem Launch auf 
              ihren Kanälen bewarben. Durch unsere Arbeit gelang es, die NFT-Kollektion Turtle Gang 
              in der Community erfolgreich bekannt zu machen und bereits vor dem Launch für großes 
              Interesse zu sorgen.
              </p>
    </div>
    <div className="container video-container-tg">
                <video src={TG1} alt="Grey Mountains Media Turtle Gang Promo" controls></video>
                <img src={Turtle8} alt="Turtle Gang NFT"/>
    </div>
    <div className="btnback">
          <Link to="/work" className="btn sm">Zurück</Link>
    </div>
    </section>
  )
}

export default TurtleGang

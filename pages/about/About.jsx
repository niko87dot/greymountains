import Header from "../../components/Header"
import HeaderImage from "../../images/Header_AboutUs.png"
import "./about.css"
import Vision from "../../images/UnsereVision.png"
import History from "../../images/UnsereGeschicht.png"


const About = () => {
  return (
    <>
      <Header image={HeaderImage}>
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={History} alt="Grey Mountains Geschichte" />
          </div>
          <div className="about__section-content">
            <h1>Unsere Geschichte</h1>
            <p>
              Unsere Wurzeln liegen im Fernsehen. Dort haben wir über die Jahre hinweg wertvolle Erfahrung in der Produktion 
              gesammelt, kreative Grenzen ausgetestet und gelernt, was wirklich funktioniert. Doch wir wollten mehr. Mehr 
              Freiheit, mehr kreative Vielfalt – und vor allem die Möglichkeit, Unternehmen mit einzigartigem Content nach 
              vorne zu bringen.
            </p>
            <p>
              Mit dieser Vision haben wir unsere Creative Agency gegründet. Unser Fokus liegt auf 
              Videomarketing, Social Media Content, Podcasts und Grafikdesign – alles, was Unternehmen dabei hilft, sich 
              authentisch zu präsentieren und ihre Marke erfolgreich zu etablieren. Doch wir erschaffen nicht einfach nur 
              Inhalte, sondern entwickeln strategischen Content mit echtem Impact.
            </p>
            <p>
              Unsere Kunden sind Experten in ihrem Bereich, 
              doch oft fehlt es ihnen an der richtigen Strategie für Branding, Marketing und Content-Erstellung. 
              Genau hier kommen wir ins Spiel: Wir denken outside the box, bieten kreative Lösungen und sorgen dafür, 
              dass Marken sich nicht nur zeigen, sondern in Erinnerung bleiben.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
        <div className="about__section-image2">
            <img src={Vision} alt="Grey Mountains Media Vision" />
          </div>
          <div className="about__section-content2">
            <h1>Unsere Vision</h1>
            <p>
              Wir glauben daran, dass gute Inhalte nicht nur schön aussehen, sondern gezielt wirken müssen. 
              Es geht nicht einfach nur um kreatives Erschaffen, sondern darum, Strategie und Kreativität zu verbinden. 
              Jede Marke hat ihre eigene Geschichte – und unser Ziel ist es, sie so zu erzählen, dass sie in Erinnerung 
              bleibt.
            </p>
            <p>
              Wir helfen Unternehmen, ihre Visionen sichtbar zu machen und strategisch zu vermarkten. Egal, ob es um 
              Recruiting, Branding oder den Verkauf von Produkten geht – wir entwickeln Inhalte, die nicht nur Aufmerksamkeit 
              erzeugen, sondern auch Ergebnisse liefern.
            </p>
            <p>
              Was uns dabei besonders macht? Wir denken outside the box. Für uns gibt es kein Problem, das nicht gelöst 
              werden kann – mit der richtigen Herangehensweise lässt sich jedes Ziel auf eine kreative Art erreichen, 
              die Eindruck hinterlässt.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

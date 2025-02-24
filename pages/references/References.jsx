import { projects } from "../../data"
import Card from "../../UI/Card"
import Header from "../../components/Header"
import HeaderImage from "../../images/Header_Referenzen.png"
import { Link } from 'react-router-dom';
import "./references.css"



const References = () => {
  return (
    <>
    <Header image={HeaderImage}>
    </Header>
      <section className="projects">        
        <div className="container projects_h">
          <h1>Unsere Referenzen</h1>
          <p>
          Jedes Projekt erzählt seine eigene Geschichte – und genau das zeigen unsere Referenzen. Hier findet ihr Beispiele dafür, wie wir kreative Ideen mit strategischer Wirkung verbinden, um die Ziele unserer Kunden zu erreichen.
          Dabei legen wir besonderen Wert darauf, den Need des Unternehmens zu verstehen, die passende Strategie zu entwickeln und die optimale Lösung umzusetzen. Ob Imagefilm, Social-Media-Kampagne oder Podcast – unsere Projekte beweisen, dass kreativer Content nicht nur gut aussieht, sondern auch wirkt.
          </p>
        </div>
        <div className="container projects__container">
            {
              projects.map(({id, title, headline, path, image}) => {
                    return (
                            <Card className="project__list" key={id}>
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <p>{headline}</p>
                                <Link to={path} className="btn sm">Mehr</Link>
                              </Card>
                      )
                  })
            }
          </div>
      </section>
    </>
  )
}

export default References

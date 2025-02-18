import { projects } from "../../data"
import Projekte from "../../components/Projekte"
import Header from "../../components/Header"
import HeaderImage from "../../images/header.png"
import "./references.css"



const References = () => {
  return (
    <>
    <Header title="Projekte" image={HeaderImage}>
      Mouth-breather. Nobody normal ever accomplished anything meaningful in this world. 
      You're an idiot, Steve Harrington. You're beautiful, Nancy Wheeler.
    </Header>
      <section className="projects" id="project">
        <div className="projects__wrapper">
            {
              projects.map(({id, title, headline, description, image}) => {
                    return (
                        <Projekte className="projects__list" key={id} image={image} title={title} headline={headline} description={description}>
                            <h4>{title}</h4>
                            <p>{headline}</p>
                            <small>{description}</small>
                        </Projekte>
                      )
                  })
            }
          </div>
      </section>
    </>
  )
}

export default References

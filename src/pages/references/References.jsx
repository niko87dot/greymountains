import { projects } from "../../data"
import Projekte from "../../components/Projekte"
import Header from "../../components/Header"
import HeaderImage from "../../images/Header_Referenzen.png"
import "./references.css"



const References = () => {
  return (
    <>
    <Header image={HeaderImage}>
    </Header>
      <section className="projects">
        <div className="container projects__container">
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

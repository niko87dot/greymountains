
import { projects } from "../../data"
import "./references.css"


const References = () => {
  return (
    <section className="projects" id="project">
        <div className="projects__wrapper">
            {
              projects.map(({id, title, headline, description, image}) => {
                    return (
                       
                        <projects className="projects__list" key={id} image={image}>
                            <h4>{title}</h4>
                            <p>{headline}</p>
                            <small>{description}</small>
                        </projects>
                      )
                  })
            }
          </div>
    </section>
  )
}

export default References

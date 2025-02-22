import { projects } from "../../data"
import Card from "../../UI/Card"
import Header from "../../components/Header"
import HeaderImage from "../../images/Header_Referenzen.png"
import { Link } from 'react-router-dom';
import {AiFillCaretRight} from "react-icons/ai"
import "./references.css"



const References = () => {
  return (
    <>
    <Header image={HeaderImage}>
    </Header>
      <section className="projects">
        <div className="container projects__container">
            {
              projects.map(({id, title, headline, path, image}) => {
                    return (
                            <Card className="project__list" key={id}>
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <p>{headline}</p>
                                <Link to={path} className="btn sm">Mehr <AiFillCaretRight/></Link>
                            </Card>
                            
                            
                            
                            /* <Projekte className="projects__list" key={id} image={image} title={title} headline={headline} path={path}>
                              <h4>{title}</h4>
                              <p>{headline}</p>
                              <Link to={path} className="btn sm">Mehr<AiFillCaretRight/></Link>
                            </Projekte> */
                      )
                  })
            }
          </div>
      </section>
    </>
  )
}

export default References

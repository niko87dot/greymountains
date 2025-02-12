import Header from "../../components/Header"
import HeaderImage from "../../images/header.png"
import "./about.css"
import StoryImage from "../../images/platzhalter2.png"


const About = () => {
  return (
    <>
      <Header title="About US" image={HeaderImage}>
        Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
        Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Unsere Geschichte</h1>
            <p>
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
            <p>
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
            <p>
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Unsere Vision</h1>
            <p>
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
            <p>
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
              Bacon ipsum dolor amet ground round buffalo doner short ribs jerky bresaola. 
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
            <p>
              Pancetta alcatra fatback meatball tongue ground round, kielbasa chuck prosciutto
            </p>
          </div>
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

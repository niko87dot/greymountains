import "./project.css"
import MS1 from "../../images/Videos/MS1.mp4"
import MS2 from "../../images/Videos/MS2.mp4"
import MS3 from "../../images/Videos/MS3.mp4"

const Moroder = () => {
  return (
    <section className="project">
        <div className="container project__container">
          <h1>Moroder Scheideanstalt</h1>
          <h2>Need</h2>
          <p>
          Die Moroder Scheideanstalt suchte nach einer kreativen Möglichkeit, neue Mitarbeiter zu 
          gewinnen. Ziel war es, das Unternehmen als attraktiven Arbeitgeber zu präsentieren und 
          dabei die Vielseitigkeit der Tätigkeiten sowie das kollegiale Miteinander im Betrieb 
          authentisch darzustellen.
          </p>
          <h2>Unsere Herangehensweise:</h2>
          <p>
          Um potenziellen Bewerbern einen realistischen Einblick in das Unternehmen zu geben, haben 
          wir kurze Mitarbeitervorstellungen aller Teammitglieder vor Ort aufgenommen. 
          Jeder Mitarbeiter wurde in einem persönlichen Interview zu seiner Tätigkeit, 
          dem Arbeitsalltag und der Unternehmenskultur befragt. Die Ansprache erfolgte bewusst 
          im <em>"Du"</em>, um die freundschaftliche und offene Atmosphäre im Team hervorzuheben.
          </p>
          <h2>Unsere Lösung</h2>
          <p>
          Die Videos wurden im Hochformat produziert, um sie optimal für die Social-Media-Kanäle 
          Instagram und TikTok einzusetzen. Außerdem wurde moderne und dynamische Musik verwendet, 
          und das Video wurde dynamisch gefilmt und geschnitten, um die Aufmerksamkeit der 
          Zuschauer zu erregen und zu halten.
          </p>
        </div>
        <div className="container video-container">
            <video src={MS1} alt="Grey Mountains Media Moroder Scheideanstalt Video 1" controls></video>
            <video src={MS2} alt="Grey Mountains Media Moroder Scheideanstalt Video 2" controls></video>
            <video src={MS3} alt="Grey Mountains Media Moroder Scheideanstalt Video 3" controls></video>
            </div>
    </section>
  )
}

export default Moroder

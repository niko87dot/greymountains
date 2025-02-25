import React from "react"
import { Link } from "react-router-dom"
import SwissLifeHead from "../../images/Header_SLS.png"

const SwissLife = () => {
  return (
    <section className="project">
        <div className="container project__container">
          <h1>Swiss Life Select</h1>
          <img src={SwissLifeHead} alt="RTL Explosiv Herzoel Reportage by Grey Mountains Media" className="ameos__head"/>
          <h2>Need</h2>
          <p>
          Swiss Life Select benötigte einen Recruitingfilm, um neue potenzielle Mitarbeiter 
          anzusprechen. Der Fokus lag darauf, die Dynamik und das Miteinander im Team hervorzuheben. 
          Besonders betont werden sollten die Vorteile des Unternehmens, wie selbstbestimmtes 
          Arbeiten oder flexible Arbeitszeiten.
          </p>
          <h2>Unsere Herangehensweise:</h2>
          <p>
          Um die Teamdynamik authentisch einzufangen, begleiteten wir die Kanzleimitarbeiter einen 
          ganzen Tag lang bei ihrer Arbeit. Jeder Mitarbeiter wurde einzeln interviewt und 
          sprach dabei über den Arbeitsalltag, die Unternehmenskultur und die persönlichen 
          Vorteile des Berufs. Dabei lag der Fokus auf dem persönlichen Erlebnis der Mitarbeiter, 
          nicht primär auf dem Unternehmen selbst.
          </p>
          <h2>Unsere Lösung</h2>
          <p>
          Wir entschieden uns bewusst für einen interviewbasierten Imagefilm, um den Menschen 
          hinter dem Unternehmen eine Stimme zu geben. Die Videos wurden im klassischen Querformat 
          produziert, perfekt geeignet für YouTube und die Unternehmenswebsite. Passend zur 
          dynamischen und jungen Unternehmenskultur wählten wir moderne Musik und dynamische 
          Bildaufnahmen, die den lebendigen Charakter des Teams unterstreichen.
          </p>
        </div>
        <div className="btnback">
          <Link to="/work" className="btn sm">Zurück</Link>
        </div>
    </section>
  )
}

export default SwissLife

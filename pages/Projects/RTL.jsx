import React from 'react'
import { Link } from 'react-router-dom'
import RTLHead from "../../images/Header_RTL.png"

const RTL = () => {
  return (
    <section className="project">
        <div className="container project__container">
          <h1>RTL Explosiv</h1>
          <img src={RTLHead} alt="RTL Explosiv Herzoel Reportage by Grey Mountains Media" className="ameos__head"/>
          <h2>Need</h2>
          <p>
          Im Kontext der Energiekrise suchte die <em>RTL-Sendund Explosiv</em> nach einem authentischen 
          Einblick in die Auswirkungen der steigenden Heizöl-Nachfrage. Ziel der Reportage war es, 
          sowohl die Perspektive der Lieferanten als auch die Sorgen und Herausforderungen der 
          Kunden einzufangen.
          </p>
          <h2>Unsere Herangehensweise:</h2>
          <p>
          Die erste Herausforderung bestand darin, einen geeigneten Fachbetrieb zu finden, der bereit 
          war, sich von einem Kamerateam begleiten zu lassen. Hierfür nahmen wir Kontakt zu über 
          30 Betrieben im Rhein-Ruhr-Gebiet auf, bis wir mit dem Familienunternehmen <em>Knopp-Grupe</em> 
          einen passenden Partner fanden. Das Unternehmen zeichnet sich durch seine kundenorientierte 
          Arbeitsweise aus – Vater und Sohn liefern das Heizöl gemeinsam aus und pflegen zu vielen 
          ihrer Kunden langjährige, fast freundschaftliche Beziehungen.
          </p>
          <h2>Unsere Lösung</h2>
          <p>
          Wir begleiteten das Vater-Sohn-Gespann einen ganzen Tag lang und dokumentierten ihren Arbeitsalltag 
          sowie ihre persönlichen Sichtweisen auf die aktuelle Energiekrise. Zusätzlich interviewten wir 
          zahlreiche Kunden, die an diesem Tag beliefert wurden, und hielten deren Gedanken, Sorgen und 
          Einschätzungen zur Energiesituation fest.
          <br/>
          Im Anschluss übernahmen wir den Schnitt und die Textgestaltung des Beitrags, der anschließend 
          im TV-Programm von RTL ausgestrahlt wurde. Die Reportage kam bei RTL so gut an, dass sie neben 
          Explosiv letztlich in mehreren Sendungen des Senders ausgestrahlt wurde.
          </p>
        </div>
        <div className="btnback">
          <Link to="/work" className="btn sm">Zurück</Link>
        </div>
    </section>
  )
}

export default RTL

import "./project.css"
import { Link } from "react-router-dom"
import AmeosHead from "../../images/Ameos_Referenz.png"

const Ameos = () => {
  return (
    <section className="project">
        <div className="container project__container">
              <h1>AMEOS GRUPPE</h1>
              <img src={AmeosHead} alt="Ameos Gruppe Imagefilm Drehbuch by Grey Mountains Media" className="ameos__head"/>
              <h2>Need</h2>
              <p>
              Die Krankenhausgruppe AMEOS benötigte die Planung eines professionellen Imagefilms, 
              der folgende Kernaspekte in den Vordergrund stellt:
              <li className="ameos__list">
                <ul>Den Einsatz moderner und innovativer Medizin hervorheben</ul>
                <ul>Die Patientenzufriedenheit beleuchten</ul>
                <ul>Die Vielfalt des Leistungsspektrums darstellen</ul>
                <ul>Die wichtigsten Alleinstellungsmerkmale des Krankenhauses präsentieren</ul>
              </li>
              </p>
              <h2>Unsere Herangehensweise:</h2>
              <p>
              Um dem Imagefilm einen besonders professionellen Charakter zu verleihen, entschieden wir 
              uns für einen Sprechertext. Dadurch konnten die gewünschten Inhalte strukturiert und 
              fließend in das Konzept integriert werden – eine Herausforderung, die sich in einem 
              reinen Interviewformat schwerer umsetzen ließe.
              <br/>
              Nach einer ausführlichen Sichtung aller möglichen Drehorte wählten wir die am besten 
              geeigneten Locations aus. Dabei achteten wir besonders darauf, dass die Szenen die 
              Vielfalt und Modernität des Krankenhauses widerspiegeln.
              </p>
              <h2>Unsere Lösung</h2>
              <p>
              Wir entwickelten einen detaillierten Sprechertext, der die Kernbotschaften des 
              Imagefilms transportiert. Ergänzend dazu erstellten wir eine präzise Shotliste, 
              die alle Szenen sowie die Reihenfolge der Aufnahmen festhält. Bei der Planung 
              legten wir besonderen Wert auf die optimalen Tageszeiten und die passenden 
              Lichtverhältnisse, um die visuelle Qualität jeder Szene zu maximieren.
              <br/>
              Mit dieser Planung schufen wir die Grundlage für einen Imagefilm, der die Stärken 
              von AMEOS professionell und wirkungsvoll in Szene setzt.
              </p>
        </div>
        <div className="btnback">
            <Link to="/work" className="btn sm">Zurück</Link>
        </div>
    </section>
  )
}

export default Ameos

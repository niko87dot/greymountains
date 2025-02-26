import React from 'react'
import "./videomarketing.css"
import { Link } from 'react-router-dom'

const Grafikdesign = () => {
  return (
    <section>
    <div className="container videomarketing-container">
      <h1>
        Grafikdesign & Branding
      </h1>
      <h3>
        Warum ist Grafikdesign & Branding so wichtig?
      </h3>
      <p>
        Visuelles Design ist das Gesicht eines Unternehmens. Es entscheidet maßgeblich darüber, wie eine Marke 
        wahrgenommen wird und ob sie im Gedächtnis bleibt. Ein konsistentes und ansprechendes Design schafft Vertrauen, 
        stärkt die Markenidentität und sorgt dafür, dass Inhalte auf den ersten Blick wiedererkennbar sind. Besonders 
        im digitalen Zeitalter, in dem Nutzer täglich mit unzähligen visuellen Eindrücken konfrontiert werden, ist es 
        entscheidend, sich mit kreativen und gut gestalteten Inhalten abzuheben.
      </p>
      <br/>
      <h3>
        Für wen eignet sich Grafikdesign & Branding?
      </h3>
      <p>
        Unser Service eignet sich für Unternehmen jeder Größe und Branche – vom Start-up über Mittelständler bis hin zu 
        internationalen Konzernen. Egal, ob es um den Aufbau einer neuen Marke, das Rebranding eines bestehenden 
        Unternehmens oder die Gestaltung einzelner Kommunikationsmittel geht – wir sorgen dafür, dass jedes Design 
        den richtigen Eindruck hinterlässt.
      </p>
      <h3>
        Unsere Leistungen im Bereich Grafikdesign & Branding
      </h3>
      <p>
        <li>
            <ul><strong>Logo-Design:</strong> Entwicklung einzigartiger Logos, die die Identität der Marke widerspiegeln</ul>
            <ul><strong>Corporate Design:</strong> Erstellung von Farbpaletten, Schriftarten und visuellen Elementen, die die Marke konsistent präsentieren</ul>
            <ul><strong>Social Media Designs:</strong> Gestaltung von Posts, Stories, Reels-Covern und Bannern, die die Aufmerksamkeit der Zielgruppe gewinnen</ul>
            <ul><strong>Printmaterialien:</strong> Design von Flyern, Broschüren, Visitenkarten, Plakaten und mehr</ul>
            <ul><strong>Werbemittel:</strong> Gestaltung von Anzeigen, Roll-ups und Messeauftritten, die die Marke eindrucksvoll in Szene setzen</ul>
            <ul><strong>Infografiken:</strong> Komplexe Informationen visuell ansprechend und leicht verständlich darstellen</ul>
        </li>
      </p>
      <h3>
      Unser Prozess – Von der Idee bis zum finalen Design
      </h3>
      <p>
      <li>
          <ol className="fatlist"><strong>Beratung & Konzeptentwicklung:</strong> Gemeinsam mit unseren Kunden definieren wir die visuellen Ziele und erarbeiten ein Designkonzept, das die Markenwerte perfekt kommuniziert.</ol>
          <ol className="fatlist"><strong>Design-Erstellung:</strong> Unsere Designer setzen die Ideen kreativ um – egal, ob es um einzelne Elemente oder das gesamte Corporate Design geht. Jedes Design wird auf die jeweilige Zielgruppe abgestimmt.</ol>
          <ol className="fatlist"><strong>Feedback & Anpassung:</strong> Wir legen großen Wert darauf, dass unsere Designs genau den Vorstellungen unserer Kunden entsprechen. Deshalb bieten wir die Möglichkeit, Entwürfe zu prüfen und Anpassungen vorzunehmen.</ol>
          <ol className="fatlist"><strong>Bereitstellung & Anwendung:</strong> Sobald das Design finalisiert ist, liefern wir alle benötigten Dateiformate und stellen sicher, dass es auf allen Kanälen – digital und gedruckt – optimal dargestellt wird.</ol>
      </li>
      </p>
      <h3>
        Was macht uns besonders?
      </h3>
      <p>
      <li>
          <ul>
              <strong>Kreativität mit Wirkung:</strong><br/>
              Unsere Designs sind nicht nur optisch ansprechend, sondern unterstützen auch die strategischen Ziele unserer Kunden.
          </ul>
          <ul>
              <strong>Maßgeschneiderte Lösungen:</strong><br/>
              Jedes Design wird individuell entwickelt, um die Einzigartigkeit der Marke zu unterstreichen.
          </ul>
          <ul>
              <strong>Alles aus einer Hand:</strong><br/>
              Von der ersten Skizze bis zur finalen Umsetzung bieten wir einen Rundum-Service – für Design, das im Gedächtnis bleibt.
          </ul>
      </li>
      </p>
      <div className="btnback">
        <Link to="/" className="btn sm">Zurück</Link>
      </div>
    </div>
  </section>
  )
}

export default Grafikdesign

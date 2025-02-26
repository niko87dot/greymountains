import React from 'react'
import { Link } from 'react-router-dom'
import "./videomarketing.css"

const Podcastpakete = () => {
  return (
    <section>
        <div className="container videomarketing-container">
          <h1>
            Podcast-Produktion & Moderation
          </h1>
          <h3>
            Warum ist eine Podcast-Produktion so wichtig?
          </h3>
          <p>
            Podcasts bieten eine einzigartige Möglichkeit, die eigene Marke zu präsentieren und eine persönliche 
            Verbindung zur Zielgruppe aufzubauen. Als eines der beliebtesten Langformat-Inhalte können sie Themen 
            ausführlich behandeln und so Vertrauen und Expertise vermitteln – weit über das hinaus, was kurze 
            Inhalte wie Reels oder Posts leisten können.
          </p>
          <br/>
          <h3>
            Für wen eignet sich unser Podcast-Service?
          </h3>
          <p>
            Podcasts eignen sich für Unternehmen jeder Größe und Branche. Ob es darum geht, Fachwissen zu teilen, 
            das Markenimage zu stärken oder die Kundenbindung zu erhöhen – wir helfen dabei, den passenden Podcast 
            zu entwickeln und professionell umzusetzen.
          </p>
          <h3>
            Unsere Leistungen im Bereich Podcast-Produktion & Moderation
          </h3>
          <p>
            <li>
                <ul><strong>Konzeptentwicklung:</strong> Gemeinsam mit unseren Kunden entwickeln wir das passende Format, das sowohl zur Marke als auch zur Zielgruppe passt</ul>
                <ul><strong>Technische Leitung:</strong> Wir übernehmen die gesamte technische Umsetzung, damit sich unsere Kunden ganz auf den Inhalt konzentrieren können</ul>
                <ul><strong>Videopodcasts & Audiopodcasts:</strong> Produktion sowohl reiner Audiopodcasts als auch Videoformate</ul>
                <ul><strong>Moderation:</strong> Auf Wunsch stellen wir eine erfahrene Podcast-Moderatorin zur Verfügung, die souverän durch jede Episode führt</ul>
                <ul><strong>Postproduktion:</strong> Professioneller Schnitt inklusive Entfernung von Versprechern, Pausen und Hintergrundgeräuschen</ul>
                <ul><strong>Veröffentlichung / Podcasthosting:</strong> Hochladen des Podcasts auf allen gängigen Plattformen wie Spotify, Apple Podcasts und Google Podcasts inklusive Beschreibung und Titelgestaltung</ul>
                <ul><strong>Grafische Inhalte</strong> Gestaltung von Podcast-Covern und begleitenden Social-Media-Posts zur Bewerbung der Folgen</ul>
                <ul><strong>Coaching:</strong> Unterstützung für Unternehmen, die selbst moderieren möchten, inklusive Tipps für Sprache, Präsenz und Interviewführung</ul>
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

export default Podcastpakete

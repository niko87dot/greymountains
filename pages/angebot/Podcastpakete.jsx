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
          Unser Prozess – Von der Idee bis zum ersten Stream
          </h3>
          <p>
          <li>
              <ol className="fatlist"><strong>Beratung & Konzeptentwicklung:</strong> Gemeinsam mit unseren Kunden erarbeiten wir ein individuelles Podcast-Konzept, das perfekt zur Marke und Zielgruppe passt. Dabei entwickeln wir kreative Ideen, die zum Unternehmen passen – von Wissen-Podcasts bis hin zu kreativen Formaten wie Interviews oder Storytelling.</ol>
              <ol className="fatlist"><strong>Aufnahme & Technische Umsetzung:</strong> Unser Team übernimmt die technische Leitung während der Aufnahme und stellt das gesamte Equipment zur Verfügung. Wir kommen direkt zum Kunden, damit der Aufwand für den Kunden so gering wie möglich ist, und sorgen dabei für eine professionelle Tonqualität.</ol>
              <ol className="fatlist"><strong>Postproduktion:</strong> In der Nachbearbeitung schneiden wir Versprecher, Pausen und Nebengeräusche heraus, setzen passende Musik- und Soundeffekte ein und sorgen so für einen klaren und professionellen Klang.</ol>
              <ol className="fatlist"><strong>Veröffentlichung & Verbreitung:</strong> Wir übernehmen das Hochladen des Podcasts auf allen gängigen Plattformen, formulieren ansprechende Beschreibungen und gestalten das Cover sowie Social-Media-Posts, um den Podcast optimal zu bewerben.</ol>
          </li>
          </p>
          <h3>
            Was macht uns besonders?
          </h3>
          <p>
          <li>
              <ul>
                  <strong>Alles aus einer Hand:</strong><br/>
                  Von der Planung über die technische Umsetzung bis zur Veröffentlichung bieten wir einen Komplettservice.
              </ul>
              <ul>
                  <strong>Flexible Formate:</strong><br/>
                  Ob Wissen, Interviews oder Storytelling – wir finden das passende Format für jedes Unternehmen.
              </ul>
              <ul>
                  <strong>Moderation inklusive:</strong><br/>
                  Auf Wunsch übernehmen wir die Moderation, sodass unsere Kunden sich ganz auf ihre Inhalte konzentrieren können.
              </ul>
              <ul>
                  <strong>Professionelle Postproduktion:</strong><br/>
                  Unser Schnitt sorgt dafür, dass jede Episode fließend und angenehm zu hören ist.
              </ul>
          </li>
          </p>
          <h3>
            Unendliche Möglichkeiten für individuelle Podcasts
          </h3>
          <p>
            Jedes Unternehmen ist einzigartig – und das gilt auch für den passenden Podcast. Neben klassischen 
            Wissen-Podcasts entwickeln wir auch außergewöhnliche Formate, die perfekt zur jeweiligen Branche und 
            Zielgruppe passen. Ob ein True-Crime-Podcast für eine Anwaltskanzlei, ein kulinarischer Podcast rund um 
            ein Abendessen für ein Unternehmen aus dem Food-Bereich oder ein Kaffee-Klatsch-Format, bei dem Mitarbeiter 
            authentisch von ihren Erfahrungen berichten – die Möglichkeiten sind grenzenlos. Wir finden für jedes 
            Unternehmen die passende Lösung und setzen sie kreativ und professionell um, um maximale Aufmerksamkeit 
            zu erzielen.
          </p>
          <div className="btnback">
            <Link to="/" className="btn sm">Zurück</Link>
          </div>
        </div>
      </section>
  )
}

export default Podcastpakete

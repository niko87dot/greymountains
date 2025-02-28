import React from 'react'
import "./podcast.css"
import Header from "../../components/Header"
import HeaderPodcast from "../../images/Podcast_Header.png"
import BranditVideo from "../../images/Videos/brandit__trailer.mp4"
import LatestEpisode from '../../components/LatestEpisode'
import { SiApplepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiAmazonmusic } from "react-icons/si";



const Podcast = () => {
  return (
    <>
    <Header image={HeaderPodcast}>
    </Header>
    <section className="podcast">
      <div className="container podcast-container">
        <div className="podcast__section-content">
            <h1>brandit.</h1>
            <h2>Der branding Podcast by <span className="GM_Head">Grey Mountains Media</span></h2>
            <div className="podcast_provider">
              <a href="https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=503f516a210c4e5a" target="_blank" rel="noreferrer noopener"><FaSpotify size="40px"/></a>
              <a href="https://www.amazon.de/music/player/podcasts/eeeaa93e-a7ce-4bcc-8d0a-6fa6ad198261/brandit" target="_blank" rel="noreferrer noopener"><SiAmazonmusic size="40px"/></a>
              <a href="https://podcasts.apple.com/at/podcast/brandit/id1724738282" target="_blank" rel="noreferrer noopener"><SiApplepodcasts size="40px"/></a>
            </div>
            <p className="podcast_psection">
            Bei brandit. - dem Branding Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
            die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings. 
            Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, 
            die am Ende den Unterschied zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen.
            </p>
        </div>
        <div className="podcast__section-image">
            <video src={BranditVideo} alt="Brandit Podcast Trailer by Grey Mountains Media" controls />
        </div>
      </div>
      <div className="container podcast-container2">
        <h2 className="h2pod">
        Um was geht es in dem Podcast?
        </h2>
        <p className="pcontenttwo">
          Ergänzend dazu beleuchten wir in jeder Episode, wie Marken durch konsequente Kommunikation und den gezielten Einsatz moderner Brandingstrategien nicht nur ihre Zielgruppen erreichen, sondern auch nachhaltige Verbindungen aufbauen. Mit tiefgehenden Analysen und praxisnahen Beispielen vermitteln wir, wie authentische Markenidentitäten entstehen und welche Faktoren den langfristigen Erfolg sichern.
          Darüber hinaus sind unsere Themen so breit gefächert wie die Welt des Brandings selbst. Die Hosts bringen nicht nur ihr fundiertes Expertenwissen mit ein, sondern auch ihre persönliche Meinung und Leidenschaft. In lebhaften Diskussionen wird beispielsweise erörtert, ob es sich für Unternehmen lohnt, bei TikTok-Trends mitzumachen, welcher der über 60 Coca-Cola-Slogans der überzeugendste ist und warum Discounter-Merch plötzlich als cool gilt. So wird bei brandit. nicht nur informiert, sondern auch inspiriert.
        </p>
      </div>
    </section>
    <div className="container headline__brandit">
          <h1>Hier kannst du unsere aktuellen Folgen finden</h1>
    </div>
      <LatestEpisode />
    <div className="container footline__brandit">
        <small><a href="/podcastarchiv">Hier </a>kannst du unsere älteren Folgen finden</small>  
    </div>
    </>
  )
}

export default Podcast

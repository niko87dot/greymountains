import React from 'react'
import "./podcast.css"
import Header from "../../components/Header"
import HeaderPodcast from "../../images/Podcast_Header.png"
import StoryImage from "../../images/gallery1.png"
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
            <p>
            Bei brandit. - dem Branding Podcast, sprechen wir wöchentlich über ein neues Thema, wie beispielsweise die Kraft von Storytelling, 
            die Macht eines einprägsamen Logos oder die Geheimnisse erfolgreicher Marketingkampagnen – alles aus der Welt des Brandings. 
            Dabei geht es nicht nur um theoretisches Wissen, sondern auch um praxiserprobte Strategien, inspirierende Geschichten und bewährte Methoden, 
            die am Ende den Unterschied zwischen einer durchschnittlichen und einer herausragenden Brand ausmachen.
            </p>
        </div>
        <div className="podcast__section-image">
            <img src={StoryImage} alt="" />
        </div>
      </div>
      <div className="container podcast-container2">
        <p>
        </p>
      </div>
    </section>
    <div className="container headline__brandit">
          <h1>Hier kannst du unsere aktuellen Folgen finden</h1>
    </div>
      <LatestEpisode />
    </>
  )
}

export default Podcast

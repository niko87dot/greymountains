import React from 'react'
import "./podcast.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header.png"
import StoryImage from "../../images/gallery1.png"
import LatestEpisode from '../../components/LatestEpisode'
import { SiApplepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiAmazonmusic } from "react-icons/si";


const Podcast = () => {
  return (
    <>
    <Header title="brandit." image={HeaderImage}>
      Mouth-breather. Nobody normal ever accomplished anything meaningful in this world. 
      You're an idiot, Steve Harrington. You're beautiful, Nancy Wheeler.
    </Header>
    <section className="podcast">
      <div className="container podcast-container">
        <div className="podcast__section-content">
            <h1>brandit.</h1>
            <h2>Der branding Podcast by <span className="GM_Head">Grey Mountains Media</span></h2>
            <div className="podcast_provider">
              <a href="https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=503f516a210c4e5a" target="_blank" rel="noreferrer noopener"><FaSpotify/></a>
              <a href="https://www.amazon.de/music/player/podcasts/eeeaa93e-a7ce-4bcc-8d0a-6fa6ad198261/brandit" target="_blank" rel="noreferrer noopener"><SiAmazonmusic /></a>
              <a href="https://podcasts.apple.com/at/podcast/brandit/id1724738282" target="_blank" rel="noreferrer noopener"><SiApplepodcasts /></a>
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
    </section>
        {/* <div className="container podcast__container">
            <div className="podcast__wrapper">
              <p>
              You think water moves fast? You should see ice. It moves like it has a mind. 
              Like it knows it killed the world once and got a taste for murder. 
              After the avalanche, it took us a week to climb out. Now, I don't know exactly 
              when we turned on each other, but I know that seven of us survived the slide... 
              and only five made it out. Now we took an oath, that I'm breaking now. 
              We said we'd say it was the snow that killed the other two, but it wasn't. 
              Nature is lethal but it doesn't hold a candle to man.
              </p> */}
              {/* <iframe className= "podcast__spotify"
              title="brandit. Podcast" src="https://open.spotify.com/embed/show/3JYc6CejghMVvFXCrzZne8?utm_source=generator" 
              width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; 
              picture-in-picture" loading="lazy"> 
              </iframe>
              <p>
              You think water moves fast? You should see ice. It moves like it has a mind. 
              Like it knows it killed the world once and got a taste for murder. 
              After the avalanche, it took us a week to climb out. Now, I don't know exactly 
              when we turned on each other, but I know that seven of us survived the slide... 
              and only five made it out. Now we took an oath, that I'm breaking now. 
              We said we'd say it was the snow that killed the other two, but it wasn't. 
              Nature is lethal but it doesn't hold a candle to man.
              </p> */}
            {/* </div>
          </div> */}
      <LatestEpisode />
    </>
  )
}

export default Podcast

import React from 'react'
import "./podcast.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header.png"
import StoryImage from "../../images/avatar1.jpg"
import LatestEpisode from '../../components/LatestEpisode'


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
            <h2>Der branding Podcast by Grey Mountains Media</h2>
            <p>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
            De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? 
            De apocalypsi gorger omero undead survivor dictum mauris.
            </p>
        </div>
        <div className="podcast__section-image">
            <img src={StoryImage} alt="" />
        </div>
      </div>  
    </section>
        <div className="container podcast__container">
            <div className="podcast__wrapper">
              <p>
              You think water moves fast? You should see ice. It moves like it has a mind. 
              Like it knows it killed the world once and got a taste for murder. 
              After the avalanche, it took us a week to climb out. Now, I don't know exactly 
              when we turned on each other, but I know that seven of us survived the slide... 
              and only five made it out. Now we took an oath, that I'm breaking now. 
              We said we'd say it was the snow that killed the other two, but it wasn't. 
              Nature is lethal but it doesn't hold a candle to man.
              </p>
              <iframe className= "podcast__spotify"
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
              </p>
            </div>
          </div>
      <LatestEpisode />
    </>
  )
}

export default Podcast

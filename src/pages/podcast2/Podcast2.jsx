import "./podcast2.css"

import React from 'react'

const Podcast2 = () => {
  return (
    <main>
        <article className="container">
            <section className="hero" id="hero">
                <div className="hero-content">
                    <img src="" alt="" className="hero-title"></img>
                    <p className="hero__text">
                        You think water moves fast? You should see ice. It moves like it has a mind. 
                        Like it knows it killed the world once and got a taste for murder.
                    </p>
                    <div className="hero__btn-group">
                        <button className="btn btn-primary">
                            <ion-icon name="headset"></ion-icon>
                            <span>Reinhören</span>
                        </button>
                        <div className="btn__link-wrapper">
                            <p className="btn__title">Abonnieren</p>
                            <a href="#" className="btn__link">
                                <ion-icon name="logo-apple"></ion-icon>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </main>
  )
}

export default Podcast2

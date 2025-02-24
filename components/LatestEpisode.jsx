import { episodes } from "../data"
import "./latestepisode.css"
import Episodes from "./Episodes"


const LatestEpisode = () => {
  return (
    <>
        <section className="episodes">
            <div className="container episodes__container">
                {
                    episodes.map(({id, image, title, path}) => {
                    return <Episodes key={id} image={image} title={title} path={path}>

                        </Episodes>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default LatestEpisode


//==========Bilder aus Images ziehen -- KEIN LINK =================//

/* import "./latestepisode.css"

const LatestEpisode = () => {
    const galleryLength = 3;
    const images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../images/gallery${i}.png`))
    }
  return (
    <>
        <section className="gallery">
            <div className="container gallery__container">
                {
                    images.map((image, index) => {
                        return <article key={index}>
                            <img src={image} alt={`Galley Image ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default LatestEpisode */
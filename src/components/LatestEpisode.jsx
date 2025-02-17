import "./latest.css"

const LatestEpisode = () => {
    const galleryLength = 4;
    const images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
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

export default LatestEpisode

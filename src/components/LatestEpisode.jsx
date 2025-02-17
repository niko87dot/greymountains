import "./latest.css"

const LatestEpisode = () => {
    const galleryLength = 4;
    const images = []

    for (let i = 0; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}`))
    }
  return (
    <div>
      
    </div>
  )
}

export default LatestEpisode

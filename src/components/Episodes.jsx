import Card from "../UI/Card"
import "./latestepisode.css"


const Episodes = ({image, title, path}) => {
  return (
    <Card className="episode">
        <div className="episode__img">
            <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <a href={path} target="_blank" rel="noreferrer noopener">Bei Spotify anhören</a>
    </Card>
  )
}

export default Episodes

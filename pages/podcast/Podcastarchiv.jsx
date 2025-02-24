import Archiv from "../../components/Archiv"

const Podcastarchiv = () => {
  return (
    <section>
      <div className="container podcast-archiv">
        <h1>brandit. Archiv</h1>
        <p>Unsere kürzlich hochgeladenen Podcasts. Mehr Episoden sind bei <a href="https://open.spotify.com/show/3JYc6CejghMVvFXCrzZne8?si=503f516a210c4e5a">Spotify</a> oder <a href="https://podcasts.apple.com/at/podcast/brandit/id1724738282">iTunes</a> zu finden. </p>
      </div>
      <div>
        <Archiv />
      </div>
    </section>
  )
}

export default Podcastarchiv

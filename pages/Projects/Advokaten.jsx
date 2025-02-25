import "./project.css"
import ADB1 from "../../images/Videos/Adb1.mp4"
import ADB2 from "../../images/Videos/Adb2.mp4"
import ADB3 from "../../images/Videos/Adb3.mp4"
import { Link } from "react-router-dom"

const Advokaten = () => {
  return (
        <section className="project">
            <div className="container project__container">
              <h1>Advokaten des Bösen</h1>
              <h2>Need</h2>
              <p>
              Für den True-Crime-Podcast Advokaten des Bösen sollten kurze Videos produziert werden, 
              um die einzelnen Podcast-Folgen auf den eigenen Social-Media-Kanälen zu bewerben und 
              damit das Interesse der Zielgruppe zu wecken. Ziel war es, die Spannung und den 
              thematischen Fokus jeder Folge in kurzen Clips einzufangen und so die Neugier der Zuschauer 
              zu wecken.
              </p>
              <h2>Unsere Herangehensweise:</h2>
              <p>
              Zu jeder Podcast-Folge wurde ein eigenes Kurzvideo aufgenommen, in dem die Podcast-Moderatoren 
              einen thematischen Einblick in die jeweilige Episode gaben. Die Videos wurden im Podcast-Studio 
              aufgenommen, das sich im Archiv der dazugehörigen Anwaltskanzlei befindet. Eine Wand voller 
              Akten diente als visueller Hintergrund und unterstrich die geheimnisvolle Atmosphäre des 
              True-Crime-Genres.
              </p>
              <h2>Unsere Lösung</h2>
              <p>
              Die Reels wurden so geschnitten, dass sie die Zuschauer sofort fesseln und Lust auf mehr machen. 
              Durch die gezielte Beleuchtung des Hintergrunds entstand eine zusätzliche dramatische Wirkung, 
              die perfekt zur Thematik des Podcasts passte. Die Kurzvideos wurden im Hochformat produziert, 
              um sie optimal auf Social-Media-Plattformen wie Instagram und TikTok einzusetzen
              </p>
            </div>
            <div className="container video-container">
            <video src={ADB1} alt="Grey Mountains Media Advokaten des Bösen Promo Video 1" controls></video>
            <video src={ADB2} alt="Grey Mountains Media Advokaten des Bösen Promo Video 2" controls></video>
            <video src={ADB3} alt="Grey Mountains Media Advokaten des Bösen Promo Video 3" controls></video>
            </div>
            <div className="btnback">
              <Link to="/work" className="btn sm">Zurück</Link>
            </div>
      </section>
  )
}

export default Advokaten

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Podcast from "./pages/podcast/Podcast"
import References from "./pages/references/References"
import NotFound from "./pages/notFound/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AGBs from "./pages/AGBs/AGBs"
import Datenschutz from "./pages/datenschutz/Datenschutz"
import Impressum from "./pages/impressum/Impressum"
import ZGM from "./pages/Projects/ZGM"
import Podcastarchiv from "./pages/podcast/Podcastarchiv"
import Advokaten from "./pages/Projects/Advokaten"
import Ameos from "./pages/Projects/Ameos"
import Brandit from "./pages/Projects/brandit"
import Moroder from "./pages/Projects/Moroder"
import Mundraub from "./pages/Projects/Mundraub"
import RTL from "./pages/Projects/RTL"
import SissLife from "./pages/Projects/SwissLife"
import TurtleGang from "./pages/Projects/TurtleGang"
import Videomarketing from "./pages/angebot/Videomarketing"


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="podcast" element={<Podcast/>}/>
        <Route path="work" element={<References/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="agbs" element={<AGBs/>}/>
        <Route path="datenschutz" element={<Datenschutz/>}/>
        <Route path="impressum" element={<Impressum/>}/>
        <Route path="zgm" element={<ZGM/>}/>
        <Route path="podcastarchiv" element={<Podcastarchiv/>}/>
        <Route path="advokaten" element={<Advokaten/>}/>
        <Route path="ameos" element={<Ameos/>}/>
        <Route path="brandit" element={<Brandit/>}/>
        <Route path="moroder" element={<Moroder/>}/>
        <Route path="mundraub" element={<Mundraub/>}/>
        <Route path="rtl" element={<RTL/>}/>
        <Route path="swisslife" element={<SissLife/>}/>
        <Route path="turtlegang" element={<TurtleGang/>}/>
        <Route path="videomarketing" element={<Videomarketing/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

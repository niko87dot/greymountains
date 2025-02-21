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
import Datenschutz from "./pages/Datenschutz/Datenschutz"
import Impressum from "./pages/impressum/Impressum"
import ZGM from "./pages/Projects/ZGM"

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
        <Route path="references" element={<References/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="agbs" element={<AGBs/>}/>
        <Route path="datenschutz" element={<Datenschutz/>}/>
        <Route path="impressum" element={<Impressum/>}/>
        <Route path="zgm" element={<ZGM/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App

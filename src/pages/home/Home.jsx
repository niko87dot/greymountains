import React from 'react'
import Header from "../../components/MainHeader"
import "./home.css"
import Offers from '../../components/Offers'
import Values from "../../components/Values"
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <div>
      <>
      <Header/>
      <Offers/>
      <Values/>
      <FAQs/>
      <Testimonials/>
      </>
    </div>
  )
}

export default Home

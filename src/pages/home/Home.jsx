import React from 'react'
import Header from "../../components/MainHeader"
import "./home.css"
import Offers from '../../components/Offers'
import Values from "../../components/Values"
import FAQs from '../../components/FAQs'

const Home = () => {
  return (
    <div>
      <>
      <Header/>
      <Offers/>
      <Values/>
      <FAQs/>
      </>
    </div>
  )
}

export default Home

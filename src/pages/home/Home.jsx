import React from 'react'
import Header from "../../components/MainHeader"
import "./home.css"
import Offers from '../../components/Offers'
import Values from "../../components/Values"

const Home = () => {
  return (
    <div>
      <>
      <Header/>
      <Offers/>
      <Values/>
      </>
    </div>
  )
}

export default Home

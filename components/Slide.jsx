import React from 'react'
import "./slide.css"
import Turtle1 from "../images/turtles/TurtleGang0.png"
import Turtle2 from "../images/turtles/TurtleGang1.png"
import Turtle3 from "../images/turtles/TurtleGang2.png"
import Turtle4 from "../images/turtles/TurtleGang3.png"
import Turtle5 from "../images/turtles/TurtleGang4.png"
import Turtle6 from "../images/turtles/TurtleGang5.png"
import Turtle7 from "../images/turtles/TurtleGang6.png"
import Turtle8 from "../images/turtles/TurtleGang7.png"

const Slide = () => {
  return (
    <div className="slide_wrapper">
        <div className="slideitem item1"><img src={Turtle1} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item2"><img src={Turtle2} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item3"><img src={Turtle3} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item4"><img src={Turtle4} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item5"><img src={Turtle5} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item6"><img src={Turtle6} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item7"><img src={Turtle7} alt="Turtle Gang NFTs by Grey Mountains"/></div>
        <div className="slideitem item8"><img src={Turtle8} alt="Turtle Gang NFTs by Grey Mountains"/></div>
    </div>
  )
}

export default Slide

import React from 'react'
import { BsFillCameraReelsFill } from "react-icons/bs";
import SectionHead from './SectionHead';
import { offers } from '../data';
import Card from "../UI/Card"
import { Link } from 'react-router-dom';
import {AiFillCaretRight} from "react-icons/ai"

const Offers = () => {
  return (
    <section className="offers">
        <div className="container offers__container">
            <SectionHead icon={<BsFillCameraReelsFill/>} title="Unser Angebot" />
        
            <div className="offers__wrapper">
                {
                    offers.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="offers__offer" key={id}>
                                <span>{icon}</span>
                                <h2>{title}</h2>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Mehr <AiFillCaretRight/></Link>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Offers

import React from 'react'
import { BsFillCameraReelsFill } from "react-icons/bs";
import SectionHead from './SectionHead';
import { offers } from '../data';

const Offers = () => {
  return (
    <section className="offers">
        <div className="container offers__container">
            <SectionHead icon={<BsFillCameraReelsFill/>} title="Platzhalter" />
        </div>
        <div className="offers__wrapper">
            {
                offers.map(({id, icon, title, info, path}) => {
                    return <h4>Hi</h4>
                })
            }
        </div>
    </section>
  )
}

export default Offers

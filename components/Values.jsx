import GMValues from "../images/Videos/Grey_Mountains_Media_Werte.mp4"
import SectionHead from "./SectionHead"
import {GiCutDiamond} from "react-icons/gi"
import { values } from "../data"
import Card from "../UI/Card"
import { useRef, useEffect } from "react";

const Values = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <video ref={videoRef} src={GMValues} loop muted playsInline />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Unsere Werte"/>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) =>{
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values

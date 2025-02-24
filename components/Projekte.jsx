import React from 'react'
import "./projekte.css"
import Card from '../UI/Card'

const Projekte = ({title, headline, description, image}) => {
  return (
    <Card className="projekte">
        <div className="projekte__img">
            <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <h3>{headline}</h3>
        <p>{description}</p>
    </Card>
  )
}

export default Projekte

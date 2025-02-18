import React from 'react'

const Projekte = ({title, headline, description, image}) => {
  return (
    <div className="projekte">
        <div className="projekte__img">
            <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <h3>{headline}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Projekte

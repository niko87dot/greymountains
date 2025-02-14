import { Link } from 'react-router-dom'
import React from 'react'
import "./notFound.css"

const NotFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Seite nicht gefunden</h2>
        <Link to="/" className='btn'>Startseite</Link>
      </div>
    </section>
  )
}

export default NotFound

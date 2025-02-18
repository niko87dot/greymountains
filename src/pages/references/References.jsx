import React from 'react'
import "./references.css"
import {projects} from "../../data"
import Card from '../../UI/Card'

const References = () => {
  return (
    <section className="projects" id="project">
     <div className="projects__wrapper">
                {
                  projects.map(({title, headline, description, image}) => {
                      return (
                          <Card className="projects__list">
                              <span>{image}</span>
                              <h4>{title}</h4>
                              <p>{headline}</p>
                              <small>{description}</small>
                          </Card>
                      )
                  })
                }
            </div>
    </section>
  )
}

export default References

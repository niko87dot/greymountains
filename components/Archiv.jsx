import React from 'react'
import { episodesarchive } from '../data'

const Archiv = () => {
  return (
    <>
        <section className="episodes">
            <div className="container episodes__container">
                {
                    episodesarchive.map(({id, image, title, path}) => {
                    return <Archiv key={id} image={image} title={title} path={path}>

                        </Archiv>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default Archiv

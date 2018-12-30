import React from 'react'
import './grid.scss'

// Subcomponents
const Tile = ({ html, icon }) => (
  <div className="single-offer d-flex flex-row pb-30">
    <div className="icon">
      <img src={`images/${icon}`} alt=""/>
    </div>
    <div className="desc">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
)

// Component
const Grid = ({ heading, description, tiles, elemId }) => (
  <section className="we-offer-area section-gap" id={elemId}>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-10">
          <div className="title text-center">
            <h1 className="mb-10">{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="row flex-wrap">
        {tiles.map((tile, i) => {
          return <Tile html={tile.html} icon={tile.icon} key={i} />
        })}
      </div>
    </div>
  </section>
)

export default Grid

import React from 'react'
import './cards.scss'

const Card = ({ industry, heading, description, image, moreTxt }) => (
  <a href="/behavioral-analytics/" className="card">
    <span className="card__title">{industry}</span>
    <h4>{heading}</h4>
    <img src={`images/${image}`} alt="" />
    <p>{description}</p>
    <span className="card__more">{moreTxt}</span>
  </a>
)

const Cards = ({ headline, moreTxt, cards, elemId }) => (
  <section className="cards section-gap" id={elemId}>
    <div className="container">
      <div className="cards__wrapper">
        <div className="cards__heading">
          <h1>{headline}</h1>
        </div>
        {cards.map(({ industry, heading, image, description }, i) => {
          return (
            <Card
              industry={industry}
              heading={heading}
              image={image}
              description={description}
              moreTxt={moreTxt}
              key={i}
            />
          )
        })}
      </div>
    </div>
  </section>
)

export default Cards

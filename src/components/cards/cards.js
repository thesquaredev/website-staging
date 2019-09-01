import React from 'react'
import { Link } from 'gatsby'
import './cards.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

/**
 * Renders a card
 * @param headline The card's headline
 * @param heading The card's heading
 * @param icon The card's icon
 * @param url The url to follow when clicking the card
 */
const Card = ({ headline, heading, icon, url }) => (
  <Link to={url} className="card">
    <img src={`/icons/${icon}`} alt="" />
    <span className="card__title">{headline}</span>
    <h3 className="card__heading">{heading}</h3>
  </Link>
)

/**
 * Renders a series of cards
 * @param heading The text that appears in the upper left area of the section
 * @param icon The icon to accompany the heading
 * @param cards On object containing an array of card properties
 * @param elemId The id of the root element of the section
 */
const Cards = ({ meta: { heading, icon, cards }, elemId }) => (
  <section className="cards section-gap" id={elemId}>
    <div className="container">
      <div className="cards__wrapper">
        {heading && (
          <div className="cards__heading">
            <h2>{heading}</h2>
            <img src={`/icons/${icon}`} alt="" />
          </div>
        )}
        {cards.map(({ headline, heading, icon, url }, i) => {
          return (
            <Card
              headline={headline}
              heading={heading}
              icon={icon}
              url={url}
              key={i}
            />
          )
        })}
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Cards))

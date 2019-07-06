import React from 'react'
import './pills.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

const Pill = ({ heading, icon, description }) => (
  <div className="pill">
    <img src={`/icons/${icon}`} alt="" />
    <h4 className="pill__heading">{heading}</h4>
    <p className="pill__description">{description}</p>
  </div>
)

const Pills = ({ meta: { pills }, elemId }) => (
  <section className="pills" id={elemId}>
    <div className="container">
      <div className="pills__wrapper">
        {pills.map(({ heading, icon, description }, i) => {
          return (
            <Pill
              heading={heading}
              icon={icon}
              description={description}
              key={i}
            />
          )
        })}
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Pills))

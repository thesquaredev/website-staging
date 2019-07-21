import React from 'react'
import './quartet.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

const Quarter = ({ heading, icon, description }) => (
  <div className="quarter">
    <div className="quarter__image">
      <img src={`/icons/${icon}`} alt="" />
    </div>
    <h4 className="quarter__heading">{heading}</h4>
    <div className="quarter__description">{description}</div>
  </div>
)

const Quartet = ({ meta: { heading, description, icon, quarters }, elemId }) => (
  <section className="quartet section-gap" id={elemId}>
    <div className="container">
      <h2 className="quartet__heading">{heading}</h2>
      <p className="quartet__description">{description}</p>
      <div className="quartet__quarters">
        <div className="quartet__separator">
          <img src={`/icons/${icon}`} alt="" />
        </div>
        {quarters.map(({ heading, icon, description }, i) => {
          return (
            <Quarter
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

export default withLocation(withShowcase(Quartet))

import React from 'react'
import './hero.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = ({
  meta: { heading, description, html, image, btnTxt, btnUrl },
  elemId,
}) => (
  <section className="hero" id={elemId}>
    <div className="hero__bg">
      <div
        className="hero__bg__img"
        style={{ backgroundImage: `url(/images/${image})` }}
      />
    </div>
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-10">
          <div className="generic-banner-content">
            <h1 className="text-white">{heading}</h1>
            <p>{description}</p>
            {btnTxt && (
              <AnchorLink className="primary-btn" href={`#${btnUrl}`}>
                {btnTxt}
              </AnchorLink>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Hero))

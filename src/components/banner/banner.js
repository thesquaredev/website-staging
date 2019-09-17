import React from 'react'
import './banner.scss'
import withShowcase from '../common/withShowcase/withShowcase'
import withLocation from '../common/withLocation'
import AnchorLink from 'react-anchor-link-smooth-scroll'

/**
 * Renders a fullscreen banner component
 * @param heading The title of the section
 * @param headline The text that appears above all texts
 * @param html The content of the markdown file in html format
 * @param btnTxt The text of the button
 * @param btnUrl The link to be followed when button is clicked
 * @param elemId The id for the root element of the component
 * @returns {*}
 * @constructor
 */
const Banner = ({
  meta: { heading, headline, html, btnTxt, btnUrl },
  elemId,
}) => (
  <section className="banner" id={elemId}>
    <div className="banner__bg">
      <div className="banner__bg__img" />
    </div>
    <div className="container fullscreen">
      <div className="row fullscreen banner__wrapper">
        <div className="banner__text col-lg-6 col-md-8">
          <h5 className="banner__text__headline">
            <span className="blink">_ </span>
            {headline}
          </h5>
          <h1 className="banner__text__heading">{heading}</h1>
          <div
            className="banner__text__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <AnchorLink className="primary-btn" href={`#${btnUrl}`}>
            {btnTxt}
          </AnchorLink>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Banner))

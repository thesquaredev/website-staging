import React from 'react'
import { Link } from 'gatsby'
import './callToAction.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

/**
 * Renders a callToaction component
 * @param heading The title of the section
 * @param html The content of the markdown file in html format
 * @param btnTxt The text of the button
 * @param btnUrl The link to be followed when button is clicked
 * @param image The background image
 * @param elemId The id for the root element of the component
 */
const CallToAction = ({
  meta: { heading, html, btnTxt, btnUrl, image },
  elemId,
}) => (
  <section
    id={elemId}
    className="callto-action-area relative section-gap"
    style={{ backgroundImage: `url(/images/${image})` }}
  >
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content col-lg-9">
          <div className="title text-center">
            {heading && <h1 className="mb-10 text-white">{heading}</h1>}
            {html && (
              <p
                className="text-white"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
            {btnTxt && (
              <Link to={btnUrl} className="primary-btn" fragment="contact">
                {btnTxt}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(CallToAction))

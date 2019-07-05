import React from 'react'
import { Link } from 'gatsby'
import './callToAction.scss'
import withLocation from '../common/withLocation'
import withShowcase from '../common/withShowcase/withShowcase'

const CallToAction = ({ meta: { heading, html, btnTxt, image }, elemId }) => (
  <section
    id={elemId}
    className="callto-action-area relative section-gap"
    style={{ backgroundImage: `url(images/${image})` }}
  >
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content col-lg-9">
          <div className="title text-center">
            <h1 className="mb-10 text-white">{heading}</h1>
            <p
              className="text-white"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link to="" className="primary-btn" fragment="contact">
              {btnTxt}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(CallToAction))

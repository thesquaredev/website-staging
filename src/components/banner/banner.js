import React from 'react'
import { Link } from 'gatsby'
import './banner.scss'
import withShowcase from '../common/withShowcase/withShowcase'
import withLocation from '../common/withLocation'

const Banner = ({ meta: { heading, html, btnTxt, btnUrl }, elemId }) => (
  <section className="banner" id={elemId}>
    <div className="banner__bg">
      <div className="banner__bg__img" />
    </div>
    <div className="container fullscreen">
      <div className="row fullscreen banner__wrapper">
        <div className="banner__text col-lg-7">
          <h1 className="banner__text__heading">{heading}</h1>
          <div
            className="banner__text__body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/*<a*/}
          {/*className="primary-btn"*/}
          {/*href="mailto:hello@thesquaredev.com?subject=Hello Squaredev"*/}
          {/*target="_blank"*/}
          {/*>*/}
          {/*</a>*/}
          <Link className="primary-btn" to={btnUrl}>
            {btnTxt}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default withLocation(withShowcase(Banner))

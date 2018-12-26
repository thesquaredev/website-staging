import React from 'react'
import { Link } from 'gatsby'
import './banner.scss'

const Banner = ({ heading, html, btnTxt, elemId }) => (
  <section className="banner" id={elemId}>
    <div className="container fullscreen">
      <div className="row fullscreen banner__wrapper">
        <div className="banner__content col-lg-7">
          <h1>{heading}</h1>
          <div
            className="pt-20 pb-20"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link className="primary-btn" to="">
            {btnTxt}
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Banner

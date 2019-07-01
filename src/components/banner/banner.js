import React from 'react'
import './banner.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Banner = ({ heading, html, btnTxt, elemId }) => (
  <section className="banner" id={elemId}>
    <div className="banner__bg">
      <div className="banner__bg__img"/>
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
          <AnchorLink className="primary-btn" href="#footer">
            {btnTxt}
          </AnchorLink>
        </div>
      </div>
    </div>
  </section>
)

export default Banner

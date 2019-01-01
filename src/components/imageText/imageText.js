import React from 'react'
import './imageText.scss'
import { Link } from 'gatsby'
import InViewMonitor from 'react-inview-monitor'

const ImageText = ({ heading, html, btnTxt, image, elemId }) => (
  <section className="image-text image-right section-gap" id={elemId}>
    <div className="container m-auto">
      <div className="row">
        <div className="col-md-5 image-col offset-md-1 order-md-2">
          <InViewMonitor
            classNameNotInView="image-wrap"
            classNameInView="image-wrap inview"
          >
            <div
              className="image"
              style={{ backgroundImage: `url(/images/${image})` }}
            />
          </InViewMonitor>
        </div>
        <div className="text-col col-md-6">
          <div className="text-container">
            <div className="text-wrap">
              <h2>{heading}</h2>
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
      </div>
    </div>
  </section>
)

export default ImageText
